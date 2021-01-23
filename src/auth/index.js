const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../database/models");
const authRouter = express.Router();

const getUser = (token) => {
  try {
    if (token) {
      return jwt.verify(token, JWT_SECRET);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const authMiddleWare = (req, res, next) => {
  const token = req.get("Authorization") || "";
  req.user = getUser(token.replace("Bearer ", ""));
  next();
};

const registerUser = async ({ username, email, password }) => {
  try {
    const user = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const token = jsonwebtoken.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1w" }
    );

    return {
      token,
      userId: user.id,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("No user with that username");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Incorrect password");
    }

    const token = jsonwebtoken.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1w" }
    );
    return {
      token,
      userId: user.id,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

authRouter.get("/login", async (req, res) => {
  try {
    const token = await login(req.body);
    res.json(token);
  } catch (err) {
    console.error(err);
    res.send("Error" + err);
  }
});

authRouter.get("/register", async (req, res) => {
  try {
    const token = await registerUser(req.body);
    res.json(token);
  } catch (err) {
    console.error(err);
    res.send("Error" + err);
  }
});

module.exports = { authRouter, authMiddleWare };

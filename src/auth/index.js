const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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

const authorizeMiddleWare = (req, res, next) => {
  const token = req.get("Authorization") || "";
  req.user = getUser(token.replace("Bearer ", ""));
  next();
};



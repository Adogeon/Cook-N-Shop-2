require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app,{db} = require("./app");
//syncing out server before starting server
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
});

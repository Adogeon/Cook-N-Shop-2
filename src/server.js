require("dotenv").config();

const PORT = process.env.PORT || 3000;
const { app, db } = require("./app");

//setting db sync options
let syncOptions = { force: true };

if (process.env.NODE_ENV === "test" || "development") {
  syncOptions.force = false;
}

//syncing out server before starting server
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
});

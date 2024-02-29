const Sequelize = require("sequelize");

const sequelize = new Sequelize("expenseproj", "root", "faranaz", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

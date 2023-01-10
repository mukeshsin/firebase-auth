const Sequelize = require("sequelize");

const db = new Sequelize("fbauth", "root", "singh@2023", {
  host: "localhost",
  dialect: "mysql",
  password: "singh@2023",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
module.exports = db;

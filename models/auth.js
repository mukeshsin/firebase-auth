//import sequelize
const Sequelize = require("sequelize");
const db = require("../config/database.js");

const User = db.define(
  "users",

  {
    email: {
      type: Sequelize.STRING,
      allownull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
);

// Export model user
module.exports = User;

//import sequelize
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
const User = db.define(
  "users",

  {
    email: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

// Export model user
export default User;

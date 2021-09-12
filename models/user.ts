import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
  },
  contra: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
});

export default User;

import { Sequelize } from "sequelize";

const db = new Sequelize("portfolio", "root", "", {
  host: "localhost",
  dialect: "mysql",
 // logging: false,
});

export default db;

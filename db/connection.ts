import { Sequelize } from "sequelize";

const db = new Sequelize("nodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
 // logging: false,
});

export default db;

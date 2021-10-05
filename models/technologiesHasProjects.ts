import { DataTypes } from "sequelize";
import db from "../db/connection";
import Technology from "./technology";
import Project from "./project";

const technologiesHasProjects = db.define("technologies_has_projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Project,
      key: "project_id",
    },
  },
  technology_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Technology,
      key: "technology_id",
    },
  },
});

Technology.belongsToMany(Project, { through: technologiesHasProjects,
  foreignKey: "project_id", });
Project.belongsToMany(Technology, { through: technologiesHasProjects
  , foreignKey: "technology_id" });

export default technologiesHasProjects;

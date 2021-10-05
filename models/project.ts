import { DataTypes } from "sequelize";
import db from "../db/connection";

const Project = db.define("projects", {
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link_repository: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link_project:{
        type: DataTypes.STRING,
        allowNull: false
    }
});
export default Project;


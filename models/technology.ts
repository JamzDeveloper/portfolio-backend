import { DataTypes } from "sequelize";
import db from "../db/connection";

const Technology = db.define("technologies", {
    technology_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skill:{
        type:DataTypes.BOOLEAN
    }
});

export default Technology;


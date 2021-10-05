import { DataTypes } from "sequelize";
import db from "../db/connection";
const Home  = db.define("home_descriptions", {
    description_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link_cv: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Home;
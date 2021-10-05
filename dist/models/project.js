"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Project = connection_1.default.define("projects", {
    project_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    link_repository: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    link_project: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = Project;
//# sourceMappingURL=project.js.map
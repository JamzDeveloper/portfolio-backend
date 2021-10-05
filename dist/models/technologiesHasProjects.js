"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const technology_1 = __importDefault(require("./technology"));
const project_1 = __importDefault(require("./project"));
const technologiesHasProjects = connection_1.default.define("technologies_has_projects", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    project_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: project_1.default,
            key: "project_id",
        },
    },
    technology_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: technology_1.default,
            key: "technology_id",
        },
    },
});
technology_1.default.belongsToMany(project_1.default, { through: technologiesHasProjects,
    foreignKey: "project_id", });
project_1.default.belongsToMany(technology_1.default, { through: technologiesHasProjects,
    foreignKey: "technology_id" });
exports.default = technologiesHasProjects;
//# sourceMappingURL=technologiesHasProjects.js.map
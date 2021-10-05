"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const project_1 = __importDefault(require("./project"));
const technologiesHasProjects = connection_1.default.define("technologies_has_projects", {
    project_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: project_1.default,
            key: "project_id"
        }
    }
});
exports.default = technologies_has_projects;
//# sourceMappingURL=technologies_has_projects.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Technologie = connection_1.default.define("technologies", {
    technology_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    icon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    skill: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Technologie;
//# sourceMappingURL=technologies.js.map
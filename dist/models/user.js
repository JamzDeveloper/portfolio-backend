"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define("Usuario", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    contra: {
        type: sequelize_1.DataTypes.STRING,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map
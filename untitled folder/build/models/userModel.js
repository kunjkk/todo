"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize_2 = __importDefault(require("../config/sequelize"));
var User = sequelize_2.default.define("users", {
    id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.STRING
    }
});
exports.default = User;

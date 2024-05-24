"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var sequelize_2 = __importDefault(require("../config/sequelize"));
var blog = sequelize_2.default.define("blogs", {
    blog_id: {
        type: sequelize_1.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.STRING,
        // allowNull:false
    },
    image_path: {
        type: sequelize_1.STRING,
        // allowNull:false
    },
    description: {
        type: sequelize_1.STRING,
        // allowNull:false
    }
});
exports.default = blog;

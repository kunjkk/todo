"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var blogRouter_1 = __importDefault(require("./blogRouter"));
var userRouter_1 = __importDefault(require("./userRouter"));
exports.default = (function () {
    var app = (0, express_1.Router)();
    (0, blogRouter_1.default)(app);
    (0, userRouter_1.default)(app);
    return app;
});

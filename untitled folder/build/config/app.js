"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRouter_1 = __importDefault(require("../routers/indexRouter"));
var cors = require("cors");
exports.default = (function () {
    var app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(cors());
    app.use("/api", (0, indexRouter_1.default)());
    var PORT = 2424;
    app.listen(PORT, function () {
        console.log("server is running port".concat(PORT));
    });
});

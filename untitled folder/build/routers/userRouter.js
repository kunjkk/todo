"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = require("../controllers/userController");
var auth_1 = __importDefault(require("../middlewares/auth"));
exports.default = (function (app) {
    app.post("/register", userController_1.userRegister);
    app.post("/login", userController_1.userLogin);
    app.get('/profile', auth_1.default, function (req, res) {
        res.json("hello");
    });
    //  app.get("/blog/:id", getBlogById)
    // app.put("/blog/:id", updateBlog);
    // app.delete("/blog/:id",deleteBlog)
});

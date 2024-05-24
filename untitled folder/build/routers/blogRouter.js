"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blogController_1 = require("../controllers/blogController");
// import { getAllBlog } from "../services/blogService";
exports.default = (function (app) {
    app.get("/blog", blogController_1.allBlog);
    app.post("/blog", blogController_1.createBlog);
    app.get("/blog/:id", blogController_1.getBlogById);
    app.put("/blog/:id", blogController_1.updateBlog);
    app.delete("/blog/:id", blogController_1.deleteBlog);
});
// kk

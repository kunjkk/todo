import { allBlog, createBlog, deleteBlog, getBlogById, updateBlog } from "../controllers/blogController";
// import { getAllBlog } from "../services/blogService";


export default (app) => {
    app.get("/blog", allBlog );
     app.post("/blog", createBlog);
     app.get("/blog/:id", getBlogById)
    app.put("/blog/:id", updateBlog);
    app.delete("/blog/:id",deleteBlog)
  };

  // kk
import { userLogin, userRegister } from "../controllers/userController";
import authenticateToken from "../middlewares/auth";


export default (app) => {
    app.post("/register", userRegister );
     app.post("/login", userLogin);
     app.get('/profile', authenticateToken, (req, res) => {
        res.json("hello");
      });
    //  app.get("/blog/:id", getBlogById)
    // app.put("/blog/:id", updateBlog);
    // app.delete("/blog/:id",deleteBlog)
  };
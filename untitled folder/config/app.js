import express from "express";
import routers from "../routers/indexRouter"

const cors = require("cors")

export default () =>{
    const app = express();
    app.use(express.json())
    app.use(cors());
  app.use("/api", routers());

    const PORT = 2424

    app.listen(PORT, () =>{
        console.log(`server is running port${PORT}`);
    })
}
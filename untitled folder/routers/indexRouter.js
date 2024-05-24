import {Router} from "express"
import blogRouter from "./blogRouter"
import userRouter from "./userRouter"

export default () =>{
    const app =  Router()
        blogRouter(app)
        userRouter(app)
    return app
}
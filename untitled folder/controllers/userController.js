import { loginUser, registerUser } from "../services/userService"
import { callServiceMethod } from "./baseController"


export const userRegister = async (req, res) =>{
    await callServiceMethod(req,res,registerUser(req) ,"userRegister")
}


export const userLogin = async (req, res) =>{
    await callServiceMethod(req,res,loginUser(req,res) ,"userLogin")
}

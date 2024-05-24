import { addBlog, blogDeleted, blogUpdate, getAllBlog, getBlogByIds } from "../services/blogService";
import  callServiceMethod  from "./baseController";



export const allBlog = async (req, res) => {
  await callServiceMethod(req, res, getAllBlog(), "getAllProduct");
};
 
export const createBlog = async (req, res) =>{
    await callServiceMethod(req,res,addBlog(req) ,"addBlog")
}

export const getBlogById = async (req, res) =>{
  await callServiceMethod(req,res,getBlogByIds(req) ,"getBlogById")
}

export const updateBlog = async (req,res) => {
  await callServiceMethod(req,res, blogUpdate(req), "blogUpdate")
}

export const deleteBlog = async (req,res) => {
  await callServiceMethod(req,res,blogDeleted(req), "blogDeleted")
}
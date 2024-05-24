import blog from "../models/blogModel"


export const getAllBlog = async () => {
    const getAll = await blog.findAll()
    return getAll;
}
// fj


export const getBlogByIds = async (req) => {
    try {
      const BlogId = req.params.id;
      if (!BlogId) {
        return resError({
          message: RequireMessage('Blog Id'),
        });
      }
  
      const findBlog = await blog.findOne({
        where: {
               blog_id: BlogId,

        },
      });
        return findBlog
    //   if (!findBlog) {
    //     return resError({
    //       message: NOT_FOUND,
    //     });
    //   }
  
    } catch (e) {
      throw e;
    }
  };
export const addBlog = async (req) =>{
    // console.log("req",req.body);
    try {
        let blogBody = {
            title:req.body.title,
            image_path:req.body.image_path,
         description:req.body.description
        }
    
        const blogCreate = await blog.create(blogBody)
    
        return blogCreate
    } catch (error) {
        console.log(error.message);
    }
   
}


export const blogUpdate = async (req) =>{
    try {
        const BlogId = req.params.id
        if (!BlogId) {
            return resError({
              message: RequireMessage('Blog Id'),
            });
          }
          
          let blogBody = {
            title:req.body.title,
            image_path:req.body.image_path,
         description:req.body.description
        }

        const updateBlog = await blog.update(blogBody,{
            where:{blog_id:BlogId}
        })
        return updateBlog
        } catch (error) {
        console.log(error);
    }
}


export const blogDeleted = async (req) => {
    try {
      const BlogId = req.params.id; 
  
      // Check if the Blog exists
    //   const existingBlog = await blog.findByPk(BlogId);
  
    //   if (!existingBlog) {
    //     return resError({
    //       message: notFoundMessage('Blog'),
    //     });
    //   }
  

      await blog.destroy({where:{blog_id:BlogId}})

      return "Blog is deleted!"
      // Soft delete the Blog by updating the 'deleted' field to '1'
    //   await Blogs.update(
    //     { deleted: existingBlog.deleted === '1' ? '0' : '1' },
    //     {
    //       where: {
    //         id: BlogId,
    //       },
    //     }
    //   );
  
      // Soft delete associated BlogTags by updating the 'deleted' field to '1'
    //   await BlogTags.update(
    //     { deleted: existingBlog.deleted === '1' ? '0' : '1' },
    //     {
    //       where: {
    //         blog_id: BlogId,
    //       },
    //     }
    //   );
  
    //   return resSuccess({
    //     message:
    //       existingBlog.deleted === '1'
    //         ? restoredMessage(`Blog [${existingBlog.blog_title}]`)
    //         : deleteMessage('Blog'),
    //   });
    } catch (error) {
        console.log(error);
    //   return resError({
    //     message: "INTERNAL SERVER ERROR",
    //   });
    }
  };
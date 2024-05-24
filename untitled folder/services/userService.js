import User from "../models/userModel";
import jwt from "jsonwebtoken"

export const registerUser = async (req) =>{
  try {
        let blogBody = {
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }
    
        const blogCreate = await User.create(blogBody)
            // console.log(blogCreate);
        return blogCreate
    } catch (error) {
        console.log(error.message);
    }
   
}

export const loginUser = async (req,res) =>{
    const { email, password } = req.body;
try{
    const user = await User.findOne({where:{email}});
        // console.log(user);
    if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });

    }

    if (password !== user.password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const token = jwt.sign({ id: user.id }, 'abcd123456789', { expiresIn: '1h' });
    res.json({ token , user});
}catch (err){
    console.log(err);
}
}





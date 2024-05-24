import { INTEGER, STRING } from "sequelize";
import sequelize from "../config/sequelize";


const blog = sequelize.define("blogs",{
    blog_id :{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type:STRING,
        // allowNull:false
    },
    image_path:{
        type:STRING,
        // allowNull:false
    },
    description:{
        type: STRING,
        // allowNull:false
    }
})

export default blog
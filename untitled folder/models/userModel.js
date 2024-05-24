import {  INTEGER ,STRING } from "sequelize";
import sequelize from "../config/sequelize";


const User = sequelize.define("users",{
    id :{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    username :{
        type:STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:STRING,
        allowNull:false
    },
    email:{
        type:STRING
    }
})

export default User
import { Sequelize } from "sequelize";

const dbConfig = {
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"12345",
    DB:"blog",
    dialect :"postgres",
    pool :{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}


const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    define:{
        timestamps:false,
    },
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})

export default sequelize
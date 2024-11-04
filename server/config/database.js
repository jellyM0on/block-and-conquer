import { Sequelize } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
    logging: console.log
}); 

export { sequelize }
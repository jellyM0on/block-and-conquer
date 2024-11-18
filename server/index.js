import express from "express"; 
import cors from "cors"; 
import { sequelize } from "./config/database.js";
import routes from "./routes/index.js";
import { User } from "./models/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

try{
    await sequelize.authenticate(); 
    app.listen(port);       
    console.log("DB connection established"); 
} catch(error){
    console.log(error);
}

app.use(routes); 

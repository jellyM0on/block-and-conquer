import express from "express"; 
import cors from "cors"; 
import { sequelize } from "./config/database.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); 

sequelize.authenticate().then(() => {
    app.listen(port, () => `database connected on ${port}`); 
}).catch((error) => {
    console.log(error.message)
})

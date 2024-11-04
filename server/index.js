import express from "express"; 
import cors from "cors"; 
import { sequelize } from "./config/database.js";
import passport from "passport";
import session from "express-session"; 
import "./middlewares/auth-google.js";
import routes from "./routes/index.js"

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

// secret value is for test purposes only
app.use(session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(routes); 

// test route to verify 
app.get('/', (req, res) => {
    if(req.isAuthenticated()){
        res.send(`Hello!`); 
    } else {
        res.send('You are not logged in.');
    }
})
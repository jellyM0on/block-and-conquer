import { admin } from "../config/firebase.js";

export default async function isAuthenticated(req, res, next){
    const token = req.headers.authorization?.split("Bearer")[1]; 
    
    if (!token) {
        return res.status(401).send("Unauthorized");
      }

    try{
        const decodeValue = await admin.auth().verifyIdToken(token); 
        req.user = decodeValue
        next();
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
import passport from "passport";
import express from "express";

const router = express.Router(); 

// check session status. 401 is unauthorized 
router.get("/api/auth/status", (req, res) => {
    return req.user ? res.send(req.user) : res.sendStatus(401); 
});

router.post("/api/auth/logout", (req, res) => {
    if(!req.user) return res.sendStatus(401); 
    req.logout((err) => {
        if(err) return res.sendStatus(400); 
        res.send(200); 
    });
});

// route to google auth
router.get("/api/auth/google", passport.authenticate("google")); 

// callback url
router.get("/api/auth/google/redirect", passport.authenticate("google"), (req, res) => {
    res.sendStatus(200);
});

export default router; 
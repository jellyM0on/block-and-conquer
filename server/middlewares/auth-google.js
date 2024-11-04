import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import "dotenv/config"
import { User } from "../models/User.js";
import { sequelize } from "../config/database.js";

// serialize user into a session
passport.serializeUser((user, done) => {
    console.log('Inside Serialize User');
    console.log('User object:', user);
    console.log('User ID:', user.id);
    return done(null, user.id); 
});

// deserialize out of a session
passport.deserializeUser(async (id, done) => {
    try{
        const findUser = await User.findOne({
            where: {id: id}
        })
        return findUser ? done(null, findUser) : done(null, null); 
    } catch (err){
        console.log(err); 
        return done(err, null); 
    }})


// google oauth 
export default passport.use(
    new Strategy({
        clientID: process.env.CLIENT_ID, 
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/google/redirect",
        scope: ["https://www.googleapis.com/auth/userinfo.email"]
    }, async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value;
     
        try{
            await sequelize.sync();
            const findUser = await User.findOrCreate({
                where: { email: email}
            })
            return done(null, findUser[0].dataValues); 
        } catch (error){
            return done(error, null)
        }

    })
)

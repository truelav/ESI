import JwtStrategy from ("passport-jwt").Strategy
import ExtractJwt from('passport-jwt').ExtractJwt;
import User from "../models/User/User";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const authUser = (passport) => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload)

        User.findOne({_id: jwt_payload.sub}, (error, user) => {
            if(error){
                return done(error, false)
            }
            if(user){
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
    }))
}

export default authUser
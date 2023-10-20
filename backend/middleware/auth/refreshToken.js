import jwt from "jsonwebtoken";
import JWToken from "../../models/JWToken/JWToken.js"


export const refreshToken = (refreshToken) => {
    if(!refreshToken){
        throw new Error('Unauthorized Access')
    }

    return token
};

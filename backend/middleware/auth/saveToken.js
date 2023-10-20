import JWToken from "../../models/JWToken/JWToken.js"

export const saveToken = async (userId, refreshToken) => {
    const tokenData = await JWToken.findOne({ user: userId})

    if(tokenData){
        tokenData.refreshToken = refreshToken
        return tokenData.save()
    } else {
        const token = await JWToken.create({ user: userId, refreshToken})
        return token
    }
}
import JWToken from "../../models/JWToken/JWToken"

export const deleteToken = async (refreshToken) => {
    const tokenData = await JWToken.delete({ refreshToken })
    return tokenData
}
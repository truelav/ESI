import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";
import Role from "../../models/Role/Role.js";
import UserDto from '../utils/user_dto.js'
import ApiError from '../middleware/error/apiError.js'
import User from '../models/User/User.js'

export const register = async (name, email, password, role) => {
    const candidate = await UserModel.findOne({email})
    if (candidate) {
        throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({name, email, password: hashedPassword})

    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto}
}

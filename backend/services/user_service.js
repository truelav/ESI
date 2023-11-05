import bcrypt from "bcryptjs";
import User from "../../models/User/User.js";
import UserDto from "../utils/user_dto.js";
import Role from "../../models/Role/Role.js";
import jwt from "jsonwebtoken";
import ApiError from "../middleware/error/apiError.js";
import User from "../models/User/User.js";

export const register = async (user) => {
  const { name, email, password, roles, isActivated } = user;

  const user = await User.findOne({ email });
  if (user) {
    return; // new Error with the status that the user with this email already taken
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    name,
    email,
    roles,
    password: hashedPassword,
  });

  const userDto = new UserDto(newUser);

  const accessToken = generateAccessToken({ ...userDto });
  const refreshToken = generateRefreshToken({ ...userDto });
  const newToken = new JWToken({
    user: userDto.id,
    refreshToken,
  });

  await newUser.save();
  await newToken.save();

  return { userDto, accessToken, refreshToken };
};

export const login = async () => {};

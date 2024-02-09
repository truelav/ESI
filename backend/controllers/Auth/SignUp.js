import bcrypt from "bcryptjs";
import createError from 'http-errors';
import User from "../../models/User/User.js";
import JWToken from "../../models/JWToken/JWToken.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../services/token_service.js";
import { sendCreateUserEmail } from "../../services/email_service.js";
import { HTTPStatusCodes } from "../../utils/constants.js";

export const signUp = async (req, res, next) => {
  const { name, email, company, phone, password, role } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      return next(createError(HTTPStatusCodes.ExistsAlready, `user with ${email} already exists`))
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      company,
      phone,
      role,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken({ ...newUser });
    const refreshToken = generateRefreshToken({ ...newUser });
    const newToken = new JWToken({
      user: newUser.id,
      refreshToken,
    });

    await newUser.save();
    await newToken.save();

    const emailResult = await sendCreateUserEmail(email, password)

    //Send Email That User SignUp to user and admin

    res.status(201).json({
      message: `${req.body.name} was created with success`,
      newUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(createError(HTTPStatusCodes.InternalServerError, error.message));
  }
};
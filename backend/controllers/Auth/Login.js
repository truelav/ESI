import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createToken } from "../../middleware/auth/createJWT.js";
import { refreshToken } from "../../middleware/auth/refreshJWT.js";
import User from "../../models/User/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json(`User ${email} was not found`);
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password
    );

    if (!isPasswordCorrect) {
      return res.status(403).json("Password or Email Incorrect");
    }

    const accessToken = createToken(user)
    const refreshToken = refreshToken(user)

    res.status(200).json({ message: "Login Successful", accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

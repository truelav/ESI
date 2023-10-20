import bcrypt from "bcryptjs";
import User from "../../models/User/User.js";
import { generateAccessToken } from "../../middleware/auth/generateAccessToken.js";
import { generateRefreshToken } from "../../middleware/auth/generateRefreshToken.js";

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

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    res.status(200).json({ message: "Login Successful", accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

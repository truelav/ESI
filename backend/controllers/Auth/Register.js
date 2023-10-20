import bcrypt from "bcryptjs";
import User from "../../models/User/User.js";
import { generateAccessToken } from "../../middleware/auth/generateAccessToken.js";
import { generateRefreshToken } from "../../middleware/auth/generateRefreshToken.js";

export const register = async (req, res) => {
  console.log("request: " + req.body);
  try {
    const { name, email, password, role } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(404)
        .json({ message: `User with the ${email} already exists` });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const userData = {name: newUser.name, email: newUser.email, role: newUser.role, refreshToken}

    await newUser.save();


    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    res.cookie('refreshToken', )
    res.status(201).json({message: `${req.body.name} was created with success`, user: userData});
  } catch (error) {
    res.status(500).json({
      message: "Could not register user",
    });
  }
};

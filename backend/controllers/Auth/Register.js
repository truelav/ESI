import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const userPayload = {
      _id: newUser._id,
    };

    await newUser.save();

    const token = jwt.sign(userPayload, "secret123", {
      expiresIn: "1d",
      admin: role === "admin",
    });

    res.status(201).json(`${req.body.name} was created with success`);
  } catch (error) {
    res.status(500).json({
      message: "Could not register user",
    });
  }
};
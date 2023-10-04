import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: `user with ${email} already exists` });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const userPayload = {
      _id: newUser._id,
    };

    const token = jwt.sign(userPayload, "secret123", {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: `${req.body.name} was created with success`,
      token,
      data: userPayload,
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not register user",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json(`User ${req.body.email} was not found`);
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user?.password
    );

    if (!isPasswordCorrect) {
      return res.status(403).json("Password or Email Incorrect");
    }

    const userPayload = {
      id: user._doc._id,
    };

    const token = jwt.sign(userPayload, "secret123", {
      expiresIn: "1d",
    });

    await req.session.save();

    res.status(200).json({
      message: "Login Successful",
      token,
      data: userPayload,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).json({ message: "User not found", error });
  }
};

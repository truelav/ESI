import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";

export const register = async (req, res) => {
  console.log(req.body.name);

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

    await newUser.save();

    const userPayload = {
      _id: newUser._id,
    };

    const token = jwt.sign(userPayload, "secret123", {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: `${req.body.name} was created with success`,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not register user",
    });
  }
};

export const login = async (req, res) => {
  const { email, name } = req.body;
  req.session.user = { name, isLoggedIn: true };

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
      admin: user.role === "admin",
    });

    await req.session.save();

    res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  try {
    await req.session.destroy();
    res.redirect("/");
  } catch (err) {
    res.status(404).json({ message: "User not found", error });
  }
};

export const authorizeMe = async (req, res) => {
  try {
    const user = await User.findById(req.id);
    res.status(200).json({ message: "Success", user });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "User not found", error });
  }
};

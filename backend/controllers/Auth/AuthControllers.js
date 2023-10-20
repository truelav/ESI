import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";
import Role from "../../models/Role/Role.js";

export const register = async (req, res, next) => {
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

    res.status(201).json({ message: `${req.body.name} was created with success` });
  } catch (error) {
    next(error)
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json(`User ${req.body.email} was not found`);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user?.password);
    const userRole = await Role.findById(user.role)

    if (!isPasswordCorrect) {
      return res.status(403).json("Password or Email Incorrect");
    }

    const userPayload = {
      "UserInfo": {
        username: user.name,
        role: userRole
      }
    };

    const accessToken = jwt.sign(
      userPayload,
      "secret123", 
      {
        expiresIn: "1h",
      }
    );

    const refreshToken = jwt.sign(
      userPayload,
      "secret123", 
      {
        expiresIn: "1h"
      }
    )

    // await req.session.save();
    res.cookie(
      "jwt_token", 
      accessToken, 
      // { httpOnly: true, secure: true, maxAge: 900000}
    );
    res.status(200).json({
      message: "Login Successful",
      accessToken,
      data: userPayload,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  try {
    const cookies = req.cookies
    if(!cookies?.jwt_token){
      return res.status(204).json({messange: "no content"})
    } else {
      res.clearCookie("jwt_token")
      res.json({message: "Logout success"})
    }
  } catch (error) {
    res.status(404).json({ message: "User not found", error });
  }
};

export const refresh = async (req, res, next) => {
  try {
    const {refreshToken} = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
    return res.json(userData);
  } catch (e) {
      next(e);
  }
}

export const getUsers = async (req, res, next) => {
  try {
      const users = await userService.getAllUsers();
      return res.json(users);
  } catch (e) {
      next(e);
  }
}

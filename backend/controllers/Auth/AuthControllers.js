import bcrypt from "bcryptjs";
import User from "../../models/User/User.js";
import Role from "../../models/Role/Role.js";
import UserDto from "../../utils/user_dto.js";
import JWToken from "../../models/JWToken/JWToken.js";
import {
  generateAccessToken,
  generateRefreshToken,
  saveToken,
  validateRefreshToken,
  findToken,
  generateTokens,
  deleteToken,
} from "../../services/token_service.js";

export const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: `user with ${email} already exists` });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      role,
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

    res.status(201).json({
      message: `${req.body.name} was created with success`,
      userDto,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json(`User ${req.body.email} was not found`);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user?.password);
    // const userRole = await Role.findById(user.role);

    if (!isPasswordCorrect) {
      return res.status(403).json("Password or Email Incorrect");
    }

    const userDto = new UserDto(user);
    const accessToken = generateAccessToken({ ...userDto });
    const refreshToken = generateRefreshToken({ ...userDto });

    await saveToken(userDto.id, refreshToken);

    res.cookie("refreshToken", accessToken, refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 900000,
    });

    res.status(200).json({
      message: "Login Successful",
      accessToken,
      refreshToken,
      userDto,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = validateRefreshToken(refreshToken);

    if (refreshToken || !userData) {
      return res
        .status(204)
        .json({ messange: "no authorization token available" });
    }

    const token = await deleteToken(refreshToken);
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Logout success", token });
  } catch (error) {
    res.status(404).json({ message: "User not found", error });
  }
};

export const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = validateRefreshToken(refreshToken);
    const refreshTokenFromDB = await findToken(refreshToken);

    if (!userData || !refreshTokenFromDB) {
      return res.status(400).json({ message: "Unauthorized error" });
    }

    const user = await User.findById(userData.id);

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto });

    await saveToken(userDto.id, tokens.refreshToken);

    res.cookie("refreshToken", tokens.accessToken, tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
    });
    return res.json({
      userDto,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(400).json({ message: "no users found", users: [] });
    }

    return res.json(users);
  } catch (error) {
    next(error);
  }
};

export const editUser = async () => {
  try {
  } catch (error) {
    next(error);
  }
};

export const activateUser = async () => {
  try {
    const userId = req.body.id;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: "no users found" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { isActive: true } },
      {
        upsert: true,
        returnDocument: "after", // this is new !
      }
    );

    res
      .status(200)
      .json({ message: "User Updated Successfully", user: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const deactivateUser = async () => {
  try {
    const userId = req.body.id;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: "no users found" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { isActive: true } },
      {
        upsert: false,
        returnDocument: "after", // this is new !
      }
    );

    res
      .status(200)
      .json({ message: "User Updated Successfully", user: updatedUser });
  } catch (error) {
    next(error);
  }
};

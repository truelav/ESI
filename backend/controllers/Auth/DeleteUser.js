import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";

export const deleteUser = async (req, res) => {
    try {
  
      res.status(200).json({ message: "Login Successful", token });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
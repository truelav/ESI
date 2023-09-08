import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";

export const authorize = async (req, res) => {
    try {
        
      const user = await User.findById(req.id);
      res.status(200).json({ message: "Success", user });

    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "User not found", error });
    }
  };
  
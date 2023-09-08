import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User/User.js";

export const login = async (req, res) => {
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
  
      res.status(200).json({ message: "Login Successful", token });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };
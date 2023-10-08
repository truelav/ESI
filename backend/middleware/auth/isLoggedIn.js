import User from "../../models/User/User.js";
import verifyJWToken from "./verifyJWToken.js";

const isLoggedIn = async (req, res, next) => {
  console.log("userID: " + req.headers);
  try {
    const userID = req.headers["userID"];
    const token = req.headers["x-access-token"];
    const user = await User.findById(userID);

    // verify the user exists
    if (!user) {
      res.status(500).json({ message: `user not found` });
    }

    //verify the use token
    if (!verifyJWToken(token)) {
      res.status(500).json({ message: `unauthorized request` });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "User not found", error });
  }
};

export default isLoggedIn;

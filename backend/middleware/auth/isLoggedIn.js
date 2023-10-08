import User from "../../models/User/User.js";
import verifyJWToken from "./verifyJWToken.js";

const isLoggedIn = async (req, res, next) => {
  const { id } = req.id;
  console.log("userID: " + id);
  try {
    const user = await User.findById(req.id);
    const token = req.headers["x-access-token"];

    //verify the user exists
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

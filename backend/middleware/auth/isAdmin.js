import User from "../../models/User/User";

const isAdmin = async (req, res, next) => {
  const { id } = req.id;
  try {
    const user = await User.findOne(id);
    if (!user) {
      res.status(500).json({ message: `user not found` });
    }
    if (user.role !== "ADMIN") {
      res.status(400).json({ message: `user has no admin permissions` });
    }
    console.log("use is admin");
    next();
  } catch (error) {
    console.log(error);
    res.send(500).json({ message: error });
  }
};

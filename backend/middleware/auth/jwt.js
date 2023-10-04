import jwt from "jsonwebtoken";

const verifyJWToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    // console.log(req.headers);
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    const decoded = jwt.verify(token, "secret123", () => {});
    console.log(decoded);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default verifyJWToken;

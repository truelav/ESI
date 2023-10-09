import jwt from "jsonwebtoken";
import dotenv from "dotenv"

const verifyJWToken = (req, res, next) => {
  console.log("token: " + token);
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).json({ message: "no permission" });
  }

  console.log("Bearer Token: " + authHeader)

  jwt.verify(
    token, 
    "secret123", 
    (error, decoded) => {
      if (error) return res.sendStatus(403).json({message: "invalid token"}); //invalid token
      req.user = decoded.username;
      next()
    }
  );
};

export default verifyJWToken;

import jwt from "jsonwebtoken";
import dotenv from "dotenv"

const verifyJWT = (req, res, next) => {
  console.log("token: " + token);
  const authHeader = req.headers.authorization || req.headers.Authorization

  if (!authHeader?.startsWith('Bearer')) {
    return res.status(401).json({ message: "no permission" });
  }

  const token = authHeader.split(' ')[1]

  jwt.verify(
    token, 
    "secret123", 
    (error, decoded) => {
      if (error) return res.sendStatus(403).json({message: "invalid token"}); //invalid token
      req.user = decoded.UserInfo.username;
      req.role = decoded.UserInfo.role
      next()
    }
  );
};

export default verifyJWT;

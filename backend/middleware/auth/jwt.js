import jwt from "jsonwebtoken";

const verifyJWToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log("token: " + token);

  if(!token){
    return res.json({message: "no permission"})
  }

  const x = jwt.verify(token, "secret123", function (err, decoded) {
    if (err) throw err;
    console.log(decoded);
    if (x != true) {
      res.json({ auth: false });
    } else {
      res.json({ auth: true });
    }
  });

  //   next();
};

export default verifyJWToken;

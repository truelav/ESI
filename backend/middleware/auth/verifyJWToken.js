import jwt from "jsonwebtoken";

const verifyJWToken = (token) => {
  console.log("token: " + token);

  if (!token) {
    return res.json({ message: "no permission" });
  }

  const x = jwt.verify(token, "secret123", function (error, decoded) {
    if (error) {
      return error;
    }
    console.log(decoded);
    if (x != true) {
      // res.json({ auth: false });
      return "non-authorized";
    } else {
      // res.json({ auth: true });
      return "non-authorized";
    }
  });
};

export default verifyJWToken;

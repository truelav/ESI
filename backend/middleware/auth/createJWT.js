import jwt from "jsonwebtoken";

export const createToken = (user) => {
    const userPayload = {
      id: user._doc._id,
    };

    const token = jwt.sign(userPayload, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "5m",
      admin: user.role === "admin",
    });

    return token
};

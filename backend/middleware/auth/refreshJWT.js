import jwt from "jsonwebtoken";

export const refreshToken = (user) => {
    const userPayload = {
      id: user._doc._id,
    };

    const token = jwt.sign(userPayload, process.env.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
      admin: user.role === "admin",
    });

    return token
};

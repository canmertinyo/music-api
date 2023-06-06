import jwt from "jsonwebtoken";
import { ModifiedUser } from "../../utils/interface/modified.user.type";
import config from "../../config/config";

export const createToken = (user: ModifiedUser) => {
  const payload = {
    id: user._id,
    username: user.username,
    password: user.password,
    email: user.email,
  };
  const jwtSecret = config.JWT_SECRET as string;
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "2d" });
  return token;
};

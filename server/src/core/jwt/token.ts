import jwt from "jsonwebtoken";
import config from "../../config/config";
import { IToken, RegisterUser } from "../../utils/interface";

export const createToken = (user: RegisterUser) => {
  const payload = {
    id: user._id,
    username: user.username,
    password: user.password,
    email: user.email,
    validation: user.status,
  };
  const jwtSecret = config.JWT_SECRET as string;
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "2d" });
  return token;
};

export const verifyToken = async (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.JWT_SECRET as jwt.Secret, (err, payload) => {
      if (err) return reject(err);

      return resolve(payload as IToken);
    });
  });
};

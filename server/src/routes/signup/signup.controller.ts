import { NextFunction, Request, Response } from "express";
import { RegisterUser } from "../../utils/interface";
import { createUserAndToken } from "./signup.service";
import { HttpStatusCode } from "../../utils/status_codes/api.response";

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const { email, password, username } = req.body;

    const user: RegisterUser = { email, password, username };

    await createUserAndToken(user);

    return res.status(HttpStatusCode.CREATED).json({ status: "created", userInfo: user });
  } catch (error: any) {
    next(error);
  }
};

import { Request, Response } from "express";
import { LoginUser } from "../../utils/interface/modified.user.type";
import { loginUser } from "./login.service";
import { HttpStatusCode } from "../../core/api.response";
import { IUser } from "../../utils/interface/user.interface";

// const signupService = new SignupService();

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const { email, password } = req.body;

    const currentUser = await loginUser(email, password);

    return res
      .status(HttpStatusCode.CREATED)
      .json({ status: "created", userInfo: currentUser });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

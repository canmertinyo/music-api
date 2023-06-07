import { Request, Response } from "express";
import { loginUser } from "./login.service";
import { HttpStatusCode } from "../../core/api.response";

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

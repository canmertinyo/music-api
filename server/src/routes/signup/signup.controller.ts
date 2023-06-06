import { Request, Response } from "express";
import { ModifiedUser } from "../../utils/interface/modified.user.type";
import { signUser } from "./signup.service";
import { HttpStatusCode } from "../../core/api.response";

// const signupService = new SignupService();

export const signupUser = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const { email, password, username } = req.body;

    const user: ModifiedUser = { email, password, username };

    const currentUser = await signUser(user);

    return res
      .status(HttpStatusCode.CREATED)
      .json({ status: "created", userInfo: user });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

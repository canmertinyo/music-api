import { Request, Response } from "express";
import LoginService from "./login.service";
import { HttpStatusCode } from "../../utils/status_codes/api.response";
import { Container } from "../../core/decorators/dependency.injection";

const container = new Container();
container.register("LoginService", new LoginService());
const loginService = container.resolve<LoginService>("LoginService");

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> => {
  try {
    const { email, password } = req.body;

    const currentUser = await loginService.loginUser(email, password);

    return res
      .status(HttpStatusCode.CREATED)
      .json({ status: "created", userInfo: currentUser });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

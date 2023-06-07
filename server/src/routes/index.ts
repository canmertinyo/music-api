import express from "express";
import { signupUser } from "./signup/signup.controller";
import GenerateRouter from "./router.factory";
import { SignupValidation } from "./signup/signup.validation";
import { validateSchema } from "../core/middlewares/schema.factory";
import ValidateLogin from "./login/login.validation";
import { loginUserController } from "./login/login.controller";
import { Container } from "../core/decorators/dependency.injection";

export const expressRouter = express.Router();

const container = new Container();
container.register("ValidateLogin", new ValidateLogin());
container.register("SignupValidation", new SignupValidation());
const validateLogin = container.resolve<ValidateLogin>("ValidateLogin");
const signupValidation =
  container.resolve<SignupValidation>("SignupValidation");

const generateRouter = new GenerateRouter(expressRouter);
generateRouter.POST(
  "/signup",
  validateSchema(signupValidation.signup()),
  signupUser
);
generateRouter.POST(
  "/login",
  validateSchema(validateLogin.login()),
  loginUserController
);

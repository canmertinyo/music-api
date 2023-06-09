import express from "express";
import { signupUser } from "./signup/signup.controller";
import GenerateRouter from "./router.factory";
import { SignupValidation } from "./signup/signup.validation";
import { validateSchema } from "../core/middlewares/schema.factory";
import ValidateLogin from "./login/login.validation";
import { LoginController } from "./login/login.controller";
import { Container } from "../core/decorators/dependency.injection";
import { resolveContainerFactory } from "../core/decorators/resolve.factory";

export const expressRouter = express.Router();

//Container ----------------------------------------------------------------------------------------

//Container ----------------------------------------------------------------------------------------

//Resolve ----------------------------------------------------------------------------------------

const validateLogin = resolveContainerFactory("ValidateLogin", ValidateLogin);
const loginController = resolveContainerFactory(
  "LoginController",
  LoginController
);
const signupController = resolveContainerFactory("signupUser", signupUser);
const signupValidation = resolveContainerFactory(
  "SignupValidation",
  SignupValidation
);

//Container ----------------------------------------------------------------------------------------

const generateRouter = new GenerateRouter(expressRouter);
generateRouter.POST(
  "/signup",
  validateSchema(signupValidation.signup()),
  signupController
);
generateRouter.POST(
  "/login",
  validateSchema(validateLogin.login()),
  loginController.login()
);

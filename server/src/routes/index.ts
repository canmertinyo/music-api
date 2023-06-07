import express from "express";
import { signupUser } from "./signup/signup.controller";
import GenerateRouter from "./router.factory";
import { SignupValidation } from "./signup/signup.validation";
import { validateSchema } from "../core/middlewares/schema.factory";
import ValidateLogin from "./login/login.validation";
import { LoginController } from "./login/login.controller";
import { Container } from "../core/decorators/dependency.injection";

export const expressRouter = express.Router();

//Container ----------------------------------------------------------------------------------------
const container = new Container();
container.register("ValidateLogin", new ValidateLogin());
container.register("SignupValidation", new SignupValidation());
container.register("LoginController", new LoginController());
// container.register("GenerateRouter", new GenerateRouter(expressRouter));
//Container ----------------------------------------------------------------------------------------

//Resolve ----------------------------------------------------------------------------------------
const validateLogin = container.resolve<ValidateLogin>("ValidateLogin");
const signupValidation =
  container.resolve<SignupValidation>("SignupValidation");
const loginController = container.resolve<LoginController>("LoginController");
// const generateRouter = container.resolve<Ge>
//Container ----------------------------------------------------------------------------------------

const generateRouter = new GenerateRouter(expressRouter);
generateRouter.POST(
  "/signup",
  validateSchema(signupValidation.signup()),
  signupUser
);
generateRouter.POST(
  "/login",
  validateSchema(validateLogin.login()),
  loginController.login()
);

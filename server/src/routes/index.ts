import express from "express";
import { signupUser } from "./signup/signup.controller";
import GenerateRouter from "./router.factory";
import { SignupValidation } from "./signup/signup.validation";
import { validateSchema } from "../core/middlewares/schema.factory";
import { login } from "./login/login.validation";
import { loginUserController } from "./login/login.controller";
const validation = new SignupValidation();

export const expressRouter = express.Router();

const generateRouter = new GenerateRouter(expressRouter);
generateRouter.POST("/signup", validateSchema(validation.signup()), signupUser);
generateRouter.POST("/login", validateSchema(login()), loginUserController);

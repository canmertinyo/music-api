import express, { Router } from "express";
import { signupUser } from "./signup/signup.controller";
import GenerateRouter from "./router.factory";
import { SignupValidation } from "./signup/signup.validation";
import { validateSchema } from "../core/middlewares/schema.factory";
const validation = new SignupValidation();

export const expressRouter = express.Router();

const generateRouter = new GenerateRouter(expressRouter);
generateRouter.POST("/signup", validateSchema(validation.signup()), signupUser);

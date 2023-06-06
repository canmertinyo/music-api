import express, { Router } from "express";
import { signupUser } from "./signup/signup.controller";
import GenerateRouter from "./router.factory";

export const expressRouter = express.Router();

const generateRouter = new GenerateRouter(expressRouter);
generateRouter.POST("/signup", signupUser);

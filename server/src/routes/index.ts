import express, { Router } from "express";
import { signupUser } from "./signup/signup.controller";
import MakeRouter from "./router.factory";

export const expressRouter = express.Router();

const router = new MakeRouter(expressRouter);
router.generatePOST("/signup", signupUser);

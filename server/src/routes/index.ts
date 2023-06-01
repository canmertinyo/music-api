import express from 'express';

import { signupUser } from './signup/signup.controller';

// const signupController = new SignupController();

const router = express.Router();

router.use('/signup', signupUser);

export default router;

import { Request, Response } from 'express';
import { ModifiedUser } from '../../utils/interface/modified.user.type';
import { signUser } from './signup.service';

// const signupService = new SignupService();

export const signupUser = (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  const user: ModifiedUser = { email, password, username };

  const currentUser = signUser(user);

  return res.json({ currentUser });
};

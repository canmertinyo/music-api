import { UserModel } from '../../model/user.model';
import { ModifiedUser } from '../../utils/interface/modified.user.type';
import { signupUser } from './signup.controller';

// const signupController = new SignupController();

export const signUser = async function (user: ModifiedUser) {
  console.log(user);
  return await UserModel.create(user);
};

import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../utils/interface/user.interface';

const HASH_ROUNDS = 10;

const UserSchema = new Schema({
  username: { type: String, required: true, trim: true, select: true },
  email: { type: String, required: true, trim: true, select: true },
  password: { type: String, required: true, trim: true, select: true },
});

UserSchema.pre('save', async function (next: any) {
  const thisObj = this as IUser;

  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    thisObj.password = await bcrypt.hash(thisObj.password, salt);
    return next();
  } catch (e) {
    return next(e);
  }
});

UserSchema.methods.validatePassword = async function (pass: string) {
  return bcrypt.compare(pass, this.password);
};

export const UserModel = mongoose.model<IUser>('User', UserSchema);

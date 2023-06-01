import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../utils/interface/user.interface';

export const DOCUMENT_NAME = 'User';

const HASH_ROUNDS = 10;

const UserSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    select: true,
    unique: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    select: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    trim: true,
    select: true,
  },
  status: { type: Schema.Types.Boolean, default: true, required: false },
  createdAt: { type: Schema.Types.Date, required: false, select: true },
  updatedAt: { type: Schema.Types.Date, required: false, select: true },
});

UserSchema.pre('save', async function (next: any) {
  const thisObj = this as Pick<IUser, 'password' | 'username' | 'email'>;

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

export const UserModel = mongoose.model<IUser>(DOCUMENT_NAME, UserSchema);

import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  validatePassword(password: string): boolean;
  _id?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  status?: boolean;
}

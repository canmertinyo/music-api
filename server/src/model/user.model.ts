import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../utils/interface";
import config from "../config/config";

enum Roles {
  USER = "user",
  ADMIN = "admin",
}

export const DOCUMENT_NAME = "User";

const UserSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      trim: true,
      select: true,
      unique: true,
    },
    email: {
      type: Schema.Types.String,
      trim: true,
      select: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      trim: true,
      select: true,
    },
    status: { type: Schema.Types.Boolean, default: false, required: false },
    createdAt: { type: Schema.Types.Date, required: false, select: true },
    updatedAt: { type: Schema.Types.Date, required: false, select: true },
    token: { type: Schema.Types.String, select: true },
    role: { type: Schema.Types.String, default: Roles.USER },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next: any) {
  const thisObj = this as Pick<IUser, "password">;

  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(config.HASH_ROUNDS);
    thisObj.password = await bcrypt.hash(thisObj.password, salt);
    return next();
  } catch (e: unknown) {
    return next(e);
  }
});

UserSchema.methods.validatePassword = async function (pass: string) {
  return bcrypt.compare(pass, this.password);
};

export const UserModel = mongoose.model<IUser>(DOCUMENT_NAME, UserSchema);

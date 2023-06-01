import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../utils/interface/user.interface';

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, trim: true, select: true },
  email: { type: String, required: true, trim: true, select: true },
  password: { type: String, required: true, trim: true, select: true },
});

UserSchema.pre('save', function (next) {
  let user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function (err: any, salt: any) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (
  candidatePassword: any,
  cb: any
) {
  bcrypt.compare(
    candidatePassword,
    this.password,
    function (err: any, isMatch: any) {
      if (err) return cb(err);
      cb(null, isMatch);
    }
  );
};

export const UserModel = mongoose.model('User', UserSchema);

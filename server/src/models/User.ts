import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser {
  first: string;
  last: string;
  email: string;
  password: string;
}

interface UserMethods {
  isCorrectPassword(password: string): boolean;
}

type UserModel = Model<IUser, {}, UserMethods>;

const userSchema = new Schema<IUser, UserMethods>({
  first: {
    type: String,
    required: true,
    maxLength: 24,
  },
  last: {
    type: String,
    required: true,
    maxLength: 24,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const User = model<IUser, UserModel>('User', userSchema);

export default User;

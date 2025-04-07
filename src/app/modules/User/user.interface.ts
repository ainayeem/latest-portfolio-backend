import { Model } from "mongoose";

export interface TUser {
  email: string;
  password: string;
}

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser>;

  isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
}

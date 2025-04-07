import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const loginAdmin = async (payload: TUser) => {
  const user = await User.isUserExists(payload.email);
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User not found");
  }

  // check if user password is matched
  // if (!(await User.isPasswordMatched(payload?.password, user.password))) {
  //   throw new AppError(StatusCodes.UNAUTHORIZED, "Incorrect password");
  // }

  if (payload?.password !== user.password) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "Incorrect password");
  }

  // create jwt token
  const jwtPayload = {
    email: user?.email,
  };

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "7d",
  });

  return {
    token,
  };
};

export const UserServices = {
  loginAdmin,
};

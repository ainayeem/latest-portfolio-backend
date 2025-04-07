import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";
import { asyncHandler } from "../../utils/asyncHandler";
import config from "../config";
import AppError from "../errors/AppError";
import { User } from "../modules/User/user.model";

export const auth = () => {
  return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // check if no token
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "Access token is missing or invalid. Please provide a valid token to access this resource.");
    }

    // token verify
    const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
    // console.log(decoded)

    const { email } = decoded;

    // check if the user is exists
    const user = await User.isUserExists(email);
    if (!user) {
      throw new AppError(StatusCodes.NOT_FOUND, " Invalid credentials or session. Please try logging in again");
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

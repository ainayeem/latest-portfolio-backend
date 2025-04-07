import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../../utils/asyncHandler";
import { sendResponse } from "../../../utils/sendResponse";
import { UserServices } from "./user.service";

const loginAdminController = asyncHandler(async (req: Request, res: Response) => {
  const loginAdminPayload = req.body;

  const loginResult = await UserServices.loginAdmin(loginAdminPayload);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Login successfully",
    data: loginResult,
  });
});

export const UserControllers = {
  loginAdminController,
};

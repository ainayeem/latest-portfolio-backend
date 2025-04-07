import express from "express";
import { validateRequestSchema } from "../../middlewares/validateRequestSchema";
import { UserControllers } from "./user.controller";
import { UserValidationSchema } from "./user.validation";

const router = express.Router();

router.post("/login", validateRequestSchema(UserValidationSchema.loginValidationSchema), UserControllers.loginAdminController);

export const UserRoutes = router;

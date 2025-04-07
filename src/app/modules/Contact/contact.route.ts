import express from "express";
import { auth } from "../../middlewares/auth";
import { validateRequestSchema } from "../../middlewares/validateRequestSchema";
import { ContactControllers } from "./contact.controller";
import { ContactValidationSchema } from "./contact.validation";

const router = express.Router();

router.post("/", validateRequestSchema(ContactValidationSchema.createContactValidationSchema), ContactControllers.createContactController);

router.get("/", auth(), ContactControllers.getAllContactsController);

router.get("/:id", auth(), ContactControllers.getContactController);

router.delete("/:id", auth(), ContactControllers.deleteContactController);

export const ContactRoutes = router;

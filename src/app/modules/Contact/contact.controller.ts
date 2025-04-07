import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../../utils/asyncHandler";
import { sendResponse } from "../../../utils/sendResponse";
import { ContactServices } from "./contact.service";

const createContactController = asyncHandler(async (req, res) => {
  const contactPayload = req.body;
  const createdContact = await ContactServices.createContact(contactPayload);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Contact is created successfully",
    data: createdContact,
  });
});

const getAllContactsController = asyncHandler(async (req, res) => {
  const contacts = await ContactServices.getAllContacts();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Contacts are retrieved successfully",
    data: contacts,
  });
});

const getContactController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await ContactServices.getContactById(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Contact is retrieved successfully",
    data: contact,
  });
});

const deleteContactController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await ContactServices.deleteContactById(id);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Contact is deleted successfully",
    data: {},
  });
});

export const ContactControllers = {
  createContactController,
  getAllContactsController,
  getContactController,
  deleteContactController,
};

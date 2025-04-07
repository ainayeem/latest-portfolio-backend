import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../../utils/asyncHandler";
import { sendResponse } from "../../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProjectController = asyncHandler(async (req, res) => {
  const projectPayload = req.body;
  const createdProject = await ProjectServices.createProject(projectPayload);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Project is created successfully",
    data: createdProject,
  });
});

const getAllProjectsController = asyncHandler(async (req, res) => {
  const projects = await ProjectServices.getAllProjects();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Projects are retrived successfully",
    data: projects,
  });
});

const getFeaturedProjectController = asyncHandler(async (req, res) => {
  const featuredProject = await ProjectServices.getFeaturedProject();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Featured projects are retrived successfully",
    data: featuredProject,
  });
});

const getProjectController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const project = await ProjectServices.getProjectById(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project is retrived successfully",
    data: project,
  });
});

const updateProjectController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedPayload = req.body;
  const updatedProject = await ProjectServices.updateProjectById(id, updatedPayload);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project is updated successfully",
    data: updatedProject,
  });
});

const deleteProjectController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await ProjectServices.deleteProjectById(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Project is deleted successfully",
    data: {},
  });
});

export const ProjectControllers = {
  createProjectController,
  getAllProjectsController,
  getFeaturedProjectController,
  getProjectController,
  updateProjectController,
  deleteProjectController,
};

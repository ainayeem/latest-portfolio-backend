import { StatusCodes } from "http-status-codes";
import { asyncHandler } from "../../../utils/asyncHandler";
import { sendResponse } from "../../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlogController = asyncHandler(async (req, res) => {
  const blogPayload = req.body;
  const createdBlog = await BlogServices.createBlog(blogPayload);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Blog is created successfully",
    data: createdBlog,
  });
});

const getAllBlogsController = asyncHandler(async (req, res) => {
  const blogs = await BlogServices.getAllBlogs();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blogs are retrieved successfully",
    data: blogs,
  });
});

const getBlogController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const blog = await BlogServices.getBlogById(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blog is retrieved successfully",
    data: blog,
  });
});

const updateBlogController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedPayload = req.body;

  const updatedBlog = await BlogServices.updateBlogById(id, updatedPayload);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Blog is updated successfully",
    data: updatedBlog,
  });
});

const deleteBlogController = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await BlogServices.deleteBlogById(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog is deleted successfully",
    data: {},
  });
});

export const BlogControllers = {
  createBlogController,
  getAllBlogsController,
  getBlogController,
  updateBlogController,
  deleteBlogController,
};

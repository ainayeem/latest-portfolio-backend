import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateRequestSchema = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (err) {
      next(err);
    }
  };
};

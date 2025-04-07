import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    icon: z.string(),
    name: z.string(),
    category: z.enum(["frontend", "backend", "others"]),
    description: z.string(),
    isDeleted: z.boolean().default(false),
  }),
});

const updateSkillValidationSchema = z.object({
  body: z.object({
    icon: z.string().optional(),
    name: z.string().optional(),
    category: z.enum(["frontend", "backend", "others"]).optional(),
    description: z.string().optional(),
    isDeleted: z.boolean().default(false),
  }),
});

export const SkillValidationSchema = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};

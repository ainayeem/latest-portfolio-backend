import { z } from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().max(100, "Title must not exceed 100 characters"),
    thumbnail: z.string(),
    description: z.string().max(1000, "Description must not exceed 1000 characters"),
    technologiesUsed: z.array(z.string()),
    // challengesFaced: z.string().optional(),
    // solution: z.string().optional(),
    keyFeatures: z.array(z.string()),
    liveLink: z.string(),
    frontendSourceCode: z.string().optional(),
    backendSourceCode: z.string().optional(),
    apiDocumentation: z.string().optional(),
    // projectGoals: z.string().optional(),
    // futureImprovements: z.string().optional(),
    // securityConsiderations: z.string().optional(),
    // projectTimeline: z.string().nullable().optional(),
    isFeatured: z.boolean().default(false),
    isDeleted: z.boolean().default(false),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().max(100, "Title must not exceed 100 characters").optional(),
    thumbnail: z.string().optional(),
    description: z.string().max(1000, "Description must not exceed 1000 characters").optional(),
    technologiesUsed: z.array(z.string()).optional(),
    // challengesFaced: z.string().optional(),
    // solution: z.string().optional(),
    keyFeatures: z.array(z.string()).optional(),
    liveLink: z.string().optional(),
    frontendSourceCode: z.string().optional(),
    backendSourceCode: z.string().optional(),
    apiDocumentation: z.string().optional(),
    // projectGoals: z.string().optional(),
    // futureImprovements: z.string().optional(),
    // securityConsiderations: z.string().optional(),
    // projectTimeline: z.string().nullable().optional(),
    isFeatured: z.boolean().default(false),
    isDeleted: z.boolean().default(false),
  }),
});

export const ProjectValidationSchema = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};

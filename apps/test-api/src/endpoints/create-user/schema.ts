import { z } from "zod";

/* Request */

export const createUserRequestSchema = z.object({
  name: z.string(),
  job: z.string(),
});

export type CreateUserRequestSchema = z.infer<typeof createUserRequestSchema>;

/* Response */

export const createUserResponseSchema = z.object({
  id: z.int(),
  name: z.string(),
  job: z.string(),
  createdAt: z.string(),
});

export type CreateUserResponseSchema = z.infer<typeof createUserRequestSchema>;

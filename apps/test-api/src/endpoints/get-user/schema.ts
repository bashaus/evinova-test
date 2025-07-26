import { z } from "zod";

import { userSchema } from "@/entities/user";

/* Request */

export const getUserRequestSchema = z.object({
  id: z.int(),
});

export type GetUserRequestSchema = z.infer<typeof getUserRequestSchema>;

/* Response */

export const getUserResponseSchema = z.object({
  data: userSchema,
});

export type GetUserResponseSchema = z.infer<typeof getUserResponseSchema>;

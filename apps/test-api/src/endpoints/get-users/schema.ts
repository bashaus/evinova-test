import { z } from "zod";

import { userSchema } from "@/entities/user";

/* Request */

export const getUsersRequestSchema = z.object({
  page: z.number().optional(),
  per_page: z.number().optional(),
});

export type GetUsersRequestSchema = z.infer<typeof getUsersRequestSchema>;

/* Response */

export const getUsersResponseSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total: z.number(),
  total_pages: z.number(),
  data: z.array(userSchema),
  support: z.object({
    url: z.url(),
    text: z.string(),
  }),
});

export type GetUsersResponseSchema = z.infer<typeof getUsersResponseSchema>;

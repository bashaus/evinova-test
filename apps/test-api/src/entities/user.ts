import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  email: z.email(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.url(),
});

export type UserSchema = z.infer<typeof userSchema>;

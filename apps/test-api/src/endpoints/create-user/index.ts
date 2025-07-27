import { apiClient } from "@/client";

import { CreateUserRequestSchema } from "./schema";

export const createUser = (data: CreateUserRequestSchema | unknown) =>
  apiClient.post("/users", data);

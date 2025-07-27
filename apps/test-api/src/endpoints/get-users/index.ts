import { apiClient } from "@/client";

import { GetUsersRequestSchema } from "./schema";

export const getUsers = (params: GetUsersRequestSchema | unknown = {}) =>
  apiClient.get("/users", { params });

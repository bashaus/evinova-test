import { apiClient } from "@/client";
import { GetUserRequestSchema } from "./schema";

export const getUser = ({ id }: GetUserRequestSchema | unknown) =>
  apiClient.get(`/users/${id}`);

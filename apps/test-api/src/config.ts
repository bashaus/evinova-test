import z from "zod";

export const clientConfigSchema = z.object({
  REQRES_IN_API_BASE_URL: z.url(),
  REQRES_IN_API_KEY: z.string(),
});

const clientConfig = clientConfigSchema.parse(process.env);
export default clientConfig;

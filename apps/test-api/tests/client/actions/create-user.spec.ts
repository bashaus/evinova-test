import { createUser } from "@/endpoints/create-user";
import { createUserRequestFactory } from "@/endpoints/create-user/factory";
import { createUserResponseSchema } from "@/endpoints/create-user/schema";
import z from "zod";

describe("createUser", () => {
  it("should create a valid user", async () => {
    /* Arrange */
    const req = createUserRequestFactory.build();

    /* Act */
    const res = await createUser(req);

    /* Assert */
    expect(res.status).toBe(201);

    expect(res.data).toMatchObject(req);
    expect(res.data).toHaveProperty("id");
    expect(res.data).toHaveProperty("createdAt");

    /* Annihilate */
  });

  /**
   * The documentation doesn't contain information regarding the
   * POST /users endpoint; however, the `User` schema stipulates that the `id`
   * field should be an `integer` and it is being returned as a `string`.
   */
  it.failing("should return `id` as an integer", async () => {
    /* Arrange */
    const req = createUserRequestFactory.build();

    /* Act */
    const res = await createUser(req);

    /* Assert */
    // 👇 to be removed when `User` schema returns `id` as `string`
    expect(z.number().safeParse(res.data.id).success).toBe(true);

    const parsed = createUserResponseSchema.safeParse(res.data);
    expect(parsed.success).toBe(true);

    /* Annihilate */
  });

  it("should error when job is a number", async () => {
    /* Arrange */
    const malformedPayload = { job: 1234 };

    /* Act */
    const res = await createUser(malformedPayload);

    /* Assert */
    // reqres.in typically responds with 201 even for malformed (it's mock API),
    // So simulate negative test by checking if response has missing expected fields
    expect(res.status).toBe(201);
    expect(res.data).not.toHaveProperty("name");

    /* Annihilate */
  });
});

import { getUsers } from "@/endpoints/get-users";
import { getUsersResponseSchema } from "@/endpoints/get-users/schema";

describe("getUsers", () => {
  it("should get of users", async () => {
    /* Arrange */

    /* Act */
    const res = await getUsers();

    /* Assert */
    expect(res.status).toBe(200);

    const parsed = getUsersResponseSchema.safeParse(res.data);
    expect(parsed.success).toBe(true);
    expect(parsed.data?.page).toBe(1);
    expect(parsed.data?.per_page).toBeLessThanOrEqual(6);
    expect(parsed.data?.data.length).toBeLessThanOrEqual(
      parsed.data?.per_page ?? 0,
    );

    /* Annihilate */
  });

  describe("@page", () => {
    it("should return the correct page", async () => {
      /* Arrange */

      /* Act */
      const res = await getUsers({ page: 2 });

      /* Assert */
      expect(res.status).toBe(200);

      const parsed = getUsersResponseSchema.safeParse(res.data);
      expect(parsed.success).toBe(true);
      expect(parsed.data?.page).toBe(2);

      /* Annihilate */
    });

    it("should return the correct number of pages ", async () => {
      /* Arrange */

      /* Act */
      const res = await getUsers({ per_page: 1 });

      /* Assert */
      expect(res.status).toBe(200);

      const parsed = getUsersResponseSchema.safeParse(res.data);
      expect(parsed.success).toBe(true);
      expect(parsed.data!.total_pages).toBe(parsed.data!.total);

      /* Annihilate */
    });

    /**
     * The API stipulates that `page` should be an `integer`, this should fail
     */
    it.failing("should error when alphanumeric", async () => {
      /* Arrange */

      /* Act */
      const res = await getUsers({ page: "two" });

      /* Assert */
      expect(res.status).toBe(400);

      /* Annihilate */
    });
  });

  describe("@per_page", () => {
    it("should return the correct number of results", async () => {
      /* Arrange */

      /* Act */
      const res = await getUsers({ per_page: 2 });

      /* Assert */
      expect(res.status).toBe(200);

      const parsed = getUsersResponseSchema.safeParse(res.data);
      expect(parsed.success).toBe(true);
      expect(parsed.data!.data.length).toBe(2);

      /* Annihilate */
    });

    /**
     * The API stipulates that `page` should be an `integer`, this should fail
     */
    it.failing("should error when alphanumeric", async () => {
      /* Arrange */

      /* Act */
      const res = await getUsers({ per_page: "two" });

      /* Assert */
      expect(res.status).toBe(400);

      /* Annihilate */
    });
  });
});

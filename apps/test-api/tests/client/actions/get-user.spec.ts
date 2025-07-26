import { getUser } from "@/endpoints/get-user";
import { getUserResponseSchema } from "@/endpoints/get-user/schema";

describe("getUser", () => {
  it("should return an existing user", async () => {
    /* Arrange */

    /* Act */
    const res = await getUser({ id: 1 });

    /* Assert */
    expect(res.status).toBe(200);

    const parsed = getUserResponseSchema.safeParse(res.data);
    expect(parsed.success).toBe(true);
    expect(parsed.data?.data.id).toEqual(1);

    /* Annihilate */
  });

  describe("@id", () => {
    it("should error when a word", async () => {
      /* Arrange */

      /* Act */
      const res = await getUser({ id: "one" });

      /* Assert */
      expect(res.status).toBe(404);

      /* Annihilate */
    });

    it("should error when a float", async () => {
      /* Arrange */

      /* Act */
      const res = await getUser({ id: "12.1" });

      /* Assert */
      expect(res.status).toBe(404);

      /* Annihilate */
    });
  });
});

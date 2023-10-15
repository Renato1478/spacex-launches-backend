import { afterAll, expect, test } from "vitest";

import app from "../src/app";

test("get launches stats", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/launches/stats",
  });

  expect(response.statusCode).toBe(200);
});

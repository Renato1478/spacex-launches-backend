import { expect, test } from "vitest";

import app from "../src/app";

test("list launches", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/launches",
  });

  expect(response.statusCode).toBe(200);
});

test("list launches with search parameter", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/launches?search=falcon",
  });

  expect(response.statusCode).toBe(200);
});

test("list launches with custom limit", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/launches?limit=10",
  });

  expect(response.statusCode).toBe(200);
});

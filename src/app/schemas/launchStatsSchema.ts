import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const launchesStatsResponseSchema = z.object({
  launchesByYear: z.record(z.record(z.number())),
  launchesByRocket: z.record(z.number()),
  launchesBySuccess: z.object({
    success: z.number(),
    failure: z.number(),
  }),
});

export const { schemas: launchesStatsSchema, $ref } = buildJsonSchemas(
  {
    launchesStatsResponseSchema,
  },
  {
    $id: "launchStatsSchemas",
    target: "openApi3",
  }
);

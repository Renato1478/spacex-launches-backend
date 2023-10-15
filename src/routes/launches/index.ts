import {
  FastifyInstance,
  DoneFuncWithErrOrRes,
  RouteOptions,
  FastifySchema,
} from "fastify";

import LaunchesController from "../../app/controllers/LaunchesController";
import LaunchesStatsController from "../../app/controllers/LaunchesStatsController";

export default function (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: DoneFuncWithErrOrRes
) {
  // List
  const launchesIndexOptions: FastifySchema = {
    params: {
      type: "object",
      properties: {
        limit: { type: "number" },
        offset: { type: "number" },
      },
    },
  };
  fastify.get(
    "/launches",
    { schema: launchesIndexOptions },
    LaunchesController.index
  );

  // Stats
  fastify.get("/launches/stats", LaunchesStatsController.index);

  done();
}

import {
  FastifyInstance,
  DoneFuncWithErrOrRes,
  RouteOptions,
  FastifySchema,
} from "fastify";

import LaunchController from "../../app/controllers/LaunchController";
import LaunchesStatsController from "../../app/controllers/LaunchesStatsController";

import { $ref as $refLaunch } from "../../app/schemas/launchSchema";
import { $ref as $refLaunchesStats } from "../../app/schemas/launchStatsSchema";

export default function (
  fastify: FastifyInstance,
  options: RouteOptions,
  done: DoneFuncWithErrOrRes
) {
  /** Routes Options (Schemas, Swagger, etc...) */
  const launchesIndexOptions: FastifySchema = {
    querystring: $refLaunch(`launchesRequestSchema`),
    response: {
      200: $refLaunch(`launchesResponseSchema`),
      400: {
        description: "Validation error response",
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  };
  const launchesStatsOptions: FastifySchema = {
    response: {
      200: $refLaunchesStats(`launchesStatsResponseSchema`),
    },
  };

  /** Routes definition */
  // List
  fastify.get(
    "/launches",
    { schema: launchesIndexOptions },
    LaunchController.index
  );

  // Stats
  fastify.get(
    "/launches/stats",
    { schema: launchesStatsOptions },
    LaunchesStatsController.index
  );

  done();
}

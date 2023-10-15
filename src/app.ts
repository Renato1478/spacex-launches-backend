import fastify from "fastify";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import { withRefResolver } from "fastify-zod";

// ** Schemas
import { launchSchemas } from "./app/schemas/launchSchema";
import { launchesStatsSchema } from "./app/schemas/launchStatsSchema";

// ** Env
import "./bootstrap";

// ** All Routes
import routes from "./routes";

// ** Node Cron
import "./app/cronjob/updateDatabaseRoutine";

// ** Swagger Options
import {
  fastifySwaggerOptions,
  fastifySwaggerUiOptions,
} from "./config/swagger";

// ** App
const app = fastify({ logger: true });

// ** Add Schemas
for (const schema of [...launchSchemas, ...launchesStatsSchema]) {
  app.addSchema(schema);
}

// ** Swagger
app.register(fastifySwagger, withRefResolver(fastifySwaggerOptions));
app.register(fastifySwaggerUi, fastifySwaggerUiOptions);

// ** All Routes
app.register(routes);

export default app;

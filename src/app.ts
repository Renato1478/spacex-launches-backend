import fastify from "fastify";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

// ** Env
import "./bootstrap";

// ** All Routes
import routes from "./routes";

// ** Node Cron
import "./app/cronjob/updateDatabaseRoutine";

// ** Swagger Options
import { fastifySwaggerUiOptions } from "./config/swagger";

// ** App
const app = fastify({ logger: true });

// ** Swagger
app.register(fastifySwagger);
app.register(fastifySwaggerUi, fastifySwaggerUiOptions);

// ** All Routes
app.register(routes);

export default app;

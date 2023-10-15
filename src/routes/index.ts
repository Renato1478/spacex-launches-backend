import { FastifySchema } from "fastify";
import launchesRoutes from "./launches";

export default function (app: any, options: any, done: any) {
  /** Routes Options (Schemas, Swagger, etc...) */
  const rootRouteOptions: FastifySchema = {
    response: {
      200: {
        description: "Success response",
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  };

  /** Routes definition */
  app.get("/", { schema: rootRouteOptions }, (request: any, reply: any) => {
    reply.send({ message: "Fullstack Challenge 🏅 - Space X API" });
  });

  // Registre as rotas de foguetes
  app.register(launchesRoutes);

  done();
}

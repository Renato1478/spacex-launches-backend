import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

import { version } from "../../package.json";

export const fastifySwaggerUiOptions: FastifySwaggerUiOptions = {
  routePrefix: "/docs",
  theme: {
    title: "SpaceX - API Documentation",
  },
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
};

export const fastifySwaggerOptions = {
  openapi: {
    info: {
      title: "SpaceX API - Coodesh Challenge",
      description: "API for listing SpaceX information",
      version: version,
    },
  },
};

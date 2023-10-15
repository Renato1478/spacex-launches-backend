import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Single Launch
const launchSchema = z.object({
  id: z.string(),
  spacexId: z.string(),
  flightNumber: z.number().int(),
  name: z.string(),
  success: z.boolean(),
  rocketId: z.string(),
  launchDate: z.date(),
  reused: z.boolean(),
  youtubeId: z.string().optional(),
});

const launchesRequestSchema = z.object({
  limit: z.number().optional().describe("Número de registros à serem exibidos"),
  page: z.number().optional().describe("Número da página à ser exibida"),
  search: z
    .string()
    .optional()
    .describe("Campo de pesquisa por missão, nome e/ou resultado"),
});

const launchesResponseSchema = z.object({
  results: z.array(launchSchema),
  totalDocs: z.number(),
  page: z.number(),
  totalPages: z.number(),
  hasNext: z.boolean(),
  hasPrev: z.boolean(),
});

export type ListLaunchesRequestOptions = z.infer<typeof launchesRequestSchema>;

export const { schemas: launchSchemas, $ref } = buildJsonSchemas(
  {
    launchesRequestSchema,
    launchesResponseSchema,
  },
  {
    $id: "launchSchemas",
    target: "openApi3",
  }
);

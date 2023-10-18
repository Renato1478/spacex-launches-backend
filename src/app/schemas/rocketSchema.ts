import { z } from "zod";

// Single Rocket
export const rocketSchema = z.object({
  id: z.string(),
  spacexId: z.string(),
  name: z.string(),
});

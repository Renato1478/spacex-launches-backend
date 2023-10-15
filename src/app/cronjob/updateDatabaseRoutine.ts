import cron from "node-cron";

import { updateDatabaseService } from "../services/updateDatabaseService";

cron.schedule("0 9 * * *", updateDatabaseService, {
  scheduled: true,
  timezone: "America/Sao_Paulo",
});

updateDatabaseService();

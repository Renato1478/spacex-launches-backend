import cron from "node-cron";

import { updateDatabaseService } from "../services/updateDatabase.service";

cron.schedule("0 9 * * *", updateDatabaseService, {
  scheduled: true,
  timezone: "America/Sao_Paulo",
});

updateDatabaseService();

import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateRocketsService = async () => {
  let url = "https://api.spacexdata.com/v4/rockets/";
  let options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const rocketsData = await response.json();

      // Percorra os dados dos foguetes e insira no banco de dados
      for (const rocketData of rocketsData as any[]) {
        await prisma.rocket.upsert({
          where: { spacexId: rocketData.id }, // Condição para encontrar o registro existente
          update: {
            name: rocketData.name, // Dados a serem atualizados
          },
          create: {
            spacexId: rocketData.id, // Dados para criar um novo registro se não existir
            name: rocketData.name,
          },
        });
      }

      console.log("[CRON] Foguetes salvos no banco de dados.");
    } else {
      console.error(
        "[CRON] Erro na solicitação:",
        response.status,
        response.statusText
      );
    }
  } catch (err) {
    console.error("[CRON] Erro na solicitação:", err);
  } finally {
    await prisma.$disconnect(); // Certifique-se de desconectar do banco de dados
  }
};

const updateLaunchesService = async () => {
  let url = "https://api.spacexdata.com/v4/launches/";
  let options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const launchesData = await response.json();

      // Percorra os dados de lançamentos e insira no banco de dados
      for (const launchData of launchesData as any[]) {
        const wasReused = launchData.cores.find(
          (core: any) => core.reused === true
        )
          ? true
          : false;

        await prisma.launch.upsert({
          where: { spacexId: launchData.id }, // Condição para encontrar o registro existente
          update: {
            name: launchData.name,
            missionPatch: launchData.links.patch.small,
            success: launchData.success ? true : false,
            launchDate: new Date(launchData.date_utc),
            youtubeId: launchData.links.youtube_id,
            reused: wasReused,
            flightNumber: launchData.flight_number,
            upcoming: launchData.upcoming,
            rocket: {
              connect: { spacexId: launchData.rocket }, // Substitua rocketId pelo ID do foguete associado
            },
          },
          create: {
            name: launchData.name,
            missionPatch: launchData.links.patch.small,
            spacexId: launchData.id,
            success: launchData.success ? true : false,
            launchDate: new Date(launchData.date_utc),
            youtubeId: launchData.links.youtube_id,
            reused: wasReused,
            flightNumber: launchData.flight_number,
            upcoming: launchData.upcoming,
            rocket: {
              connect: { spacexId: launchData.rocket }, // Substitua rocketId pelo ID do foguete associado
            },
          },
        });
      }

      console.log("[CRON] Lançamentos salvos no banco de dados.");
    } else {
      console.error(
        "[CRON] Erro na solicitação:",
        response.status,
        response.statusText
      );
    }
  } catch (err) {
    console.error("[CRON] Erro na solicitação:", err);
  } finally {
    await prisma.$disconnect(); // Certifique-se de desconectar do banco de dados
  }
};

export const updateDatabaseService = async () => {
  // update rockets
  await updateRocketsService(); // ! needs to be before updateLaunchesService (can be a launch with a new rocket)

  // update launches
  updateLaunchesService();
};

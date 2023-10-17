import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type IQttByKey = {
  [key: string]: number;
};

type ILaunchesByRecord = {
  [key: string]: {
    [key: string]: number;
  };
};

class LaunchesStatsController {
  async index(request: FastifyRequest, reply: FastifyReply) {
    try {
      // Buscar todos os lançamentos
      const launches = await prisma.launch.findMany({
        include: {
          rocket: true, // Inclua os dados do foguete relacionado
        },
      });

      // Calcular a quantidade de lançamentos por ano
      const launchesByYear: ILaunchesByRecord = {};
      for (const launch of launches) {
        const year = new Date(launch.launchDate).getFullYear();
        let rocketName = launch.rocket.name;
        if (launch.reused) {
          rocketName = "Used " + rocketName;
        }

        if (!launchesByYear[year]) {
          launchesByYear[year] = {};
        }

        if (!launchesByYear[year][rocketName]) {
          launchesByYear[year][rocketName] = 1;
        } else {
          launchesByYear[year][rocketName]++;
        }
      }

      // Calcular a quantidade de lançamentos por foguete
      const launchesByRocket: IQttByKey = {};
      for (const launch of launches) {
        let rocketName = launch.rocket.name;
        if (launch.reused) {
          rocketName = "Used " + rocketName;
        }

        if (launchesByRocket[rocketName]) {
          launchesByRocket[rocketName]++;
        } else {
          launchesByRocket[rocketName] = 1;
        }
      }

      // Calcular a quantidade de lançamentos bem-sucedidos e malsucedidos
      const launchesBySuccess = {
        success: 0,
        failure: 0,
      };
      for (const launch of launches) {
        if (launch.success) {
          launchesBySuccess.success++;
        } else {
          launchesBySuccess.failure++;
        }
      }

      const response = {
        launchesByYear,
        launchesByRocket,
        launchesBySuccess,
      };

      reply.send(response);
    } catch (error) {
      reply
        .status(500)
        .send({ error: "Erro ao buscar estatísticas de lançamentos" });
    }
  }
}

export default new LaunchesStatsController();

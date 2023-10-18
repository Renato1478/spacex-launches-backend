import { FastifyReply, FastifyRequest } from "fastify";

import { PrismaClient } from "@prisma/client";

import { IPaginate } from "../../types/pagination";
import { ListLaunchesRequestOptions } from "../schemas/launchSchema";

const prisma = new PrismaClient();

interface IWhereStatement {
  [key: string]: any;
}

class LaunchesController {
  async index(
    request: FastifyRequest<{
      Querystring: ListLaunchesRequestOptions;
    }>,
    reply: FastifyReply
  ) {
    try {
      const { search, limit } = request.query; // Obtenha os parâmetros da consulta
      let { page } = request.query;

      const perPage = limit ? limit : 10; // Padrão para 10 resultados por página
      if (!page) page = 1; // Padrão para página 1

      // Construa a consulta do Prisma com base no parâmetro de pesquisa
      const where: IWhereStatement = {
        upcoming: false,
      };

      if (search) {
        console.log("search", search);
        where.OR = [
          { name: { contains: search } },
          { rocket: { name: { contains: search } } },
        ];
      }

      const launches = await prisma.launch.findMany({
        where,
        include: {
          rocket: true,
        },
        orderBy: {
          flightNumber: "desc",
        },
        take: perPage,
        skip: perPage * (page - 1),
      });

      const totalDocs = await prisma.launch.count({ where });
      const totalPages = Math.ceil(totalDocs / perPage);
      const hasNext = page < totalPages;
      const hasPrev = page > 1;

      const response: IPaginate = {
        results: launches,
        totalDocs,
        page,
        totalPages,
        hasNext,
        hasPrev,
      };

      reply.send(response);
    } catch (error) {
      reply.status(500).send({ error: "Erro ao buscar lançamentos" });
    }
  }
}

export default new LaunchesController();

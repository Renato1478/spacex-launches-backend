import { FastifyReply, FastifyRequest } from "fastify";

import { PrismaClient } from "@prisma/client";

import { IPaginate } from "../../types/pagination";

const prisma = new PrismaClient();

interface IQueryIndexOptions {
  search: string;
  limit: string;
}

interface IWhereStatement {
  OR?: any;
}

class LaunchesController {
  async index(
    request: FastifyRequest<{
      Querystring: IQueryIndexOptions;
    }>,
    reply: FastifyReply
  ) {
    try {
      const { search, limit } = request.query; // Obtenha os parâmetros da consulta

      const perPage = limit ? parseInt(limit) : 10; // Padrão para 10 resultados por página

      // Construa a consulta do Prisma com base no parâmetro de pesquisa
      const where: IWhereStatement = {};

      if (search) {
        where.OR = [
          { name: { contains: search } },
          { rocket: { name: { contains: search } } },
          { success: search.toLowerCase() === "sucesso" },
        ];
      }

      const launches = await prisma.launch.findMany({
        where,
        take: perPage,
      });

      const totalDocs = launches.length;
      const page = 1; // Página atual
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

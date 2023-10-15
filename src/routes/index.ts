import launchesRoutes from "./launches";

export default function (app: any, options: any, done: any) {
  app.get("/", (request: any, reply: any) => {
    reply.send({ message: "Fullstack Challenge 🏅 - Space X API" });
  });

  // Registre as rotas de foguetes
  app.register(launchesRoutes);

  done();
}

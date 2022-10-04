import { Express, Router } from "express";
import { Server } from "http";
import { ILogger } from "./services/logger/loggerInterface.js";
import { userRouter } from "./users/users.js";

export class App {
  expressApp: Express;
  server: Server;
  port: number;
  logger: ILogger;

  constructor(app: Express, logger: ILogger) {
    this.expressApp = app;
    this.logger = logger;
  }

  useRoute(route: string, router: Router) {
    this.expressApp.use(route, router);
  }

  init(port: number) {
    this.port = port;

    this.useRoute("/users", userRouter);

    this.server = this.expressApp.listen(this.port, () =>
      this.logger.log(`Server started on port ${this.port}`)
    );
  }
}

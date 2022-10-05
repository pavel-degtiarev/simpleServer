import { Express, Router } from "express";
import { Server } from "http";
import { ILogger } from "./common/interfaces/logger.interface.js";
import { RouteController } from "./common/interfaces/routeController.interface.js";

export class App {
  expressApp: Express;
  server: Server;
  port: number;
  logger: ILogger;
  routers: RouteController[];

  constructor(app: Express, routers: RouteController[], logger: ILogger) {
    this.expressApp = app;
    this.routers = routers;
    this.logger = logger;
  }

  useRoute(route: string, router: Router) {
    this.expressApp.use(route, router);
  }

  init(port: number) {
    this.port = port;

    this.routers.forEach((item) => this.useRoute(item.route, item.controller.router));

    this.server = this.expressApp.listen(this.port, () =>
      this.logger.log(`Server started on port ${this.port}`)
    );
  }
}

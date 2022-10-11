import { Express, Router } from "express";
import { Server } from "http";
import { NextHandleFunction } from "connect";

import { ILogger } from "./common/interfaces/logger.interface.js";
import { RouteController } from "./common/interfaces/routeController.interface.js";
import { ExceptionFilter } from "./services/errors/exceptionFilter.service.js";

export class App {
  expressApp: Express;
  server: Server;
  port: number;

  logger: ILogger;
  routers: RouteController[];
  exceptionFilters: ExceptionFilter[];
  middlewares: NextHandleFunction[];

  constructor(
    app: Express,
    middlewares: NextHandleFunction[],
    routers: RouteController[],
    exceptionFilters: ExceptionFilter[],
    logger: ILogger
  ) {
    this.expressApp = app;
    this.middlewares = middlewares;
    this.routers = routers;
    this.logger = logger;
    this.exceptionFilters = exceptionFilters;
  }

  useMiddleware(middleware: NextHandleFunction): void {
    this.expressApp.use(middleware);
  }

  useRoute(route: string, router: Router): void {
    this.expressApp.use(route, router);
  }

  useExceptionFilter(filter: ExceptionFilter): void {
    this.expressApp.use(filter.catch.bind(filter));
  }

  init(port: number): void {
    this.port = port;

    this.middlewares.forEach((item) => this.useMiddleware(item));
    this.routers.forEach((item) => this.useRoute(item.route, item.controller.router));
    this.exceptionFilters.forEach((item) => this.useExceptionFilter(item));

    this.server = this.expressApp.listen(this.port, () =>
      this.logger.log(`Server started on port ${this.port}`)
    );
  }
}

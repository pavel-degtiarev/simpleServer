import express from "express";
import bodyParser from "body-parser";
import { NextHandleFunction } from "connect";

import { App } from "./app.js";
import { RouteController } from "./common/interfaces/routeController.interface.js";
import { ExceptionFilter } from "./helpers/errors/exceptionFilter.service.js";
import { ConsoleLogger } from "./helpers/logger/consoleLogger.service.js";
import { UsersController } from "./controllers/users/users.controller.js";

const consoleLogger = new ConsoleLogger();

const routers: RouteController[] = [
  {
    route: "/users",
    controller: new UsersController(consoleLogger),
  },
];

const middlewares: NextHandleFunction[] = [bodyParser.json()];
const exceptionFilters: ExceptionFilter[] = [new ExceptionFilter(consoleLogger)];

// ==================================

function main(): void {
  const app = new App(express(), middlewares, routers, exceptionFilters, consoleLogger);
  app.init(8000);
}

main();

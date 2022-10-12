import express from "express";
import bodyParser from "body-parser";
import { NextHandleFunction } from "connect";

import { App } from "./app.js";
import { RouteController } from "./interfaces/routeController.interface.js";
import { ExceptionFilter } from "./helpers/errors/exceptionFilter.service.js";
import { ConsoleLogger } from "./helpers/logger/consoleLogger.service.js";
import { UsersController } from "./controllers/users/users.controller.js";
import { UserService } from "./services/user/user.service.js";

const consoleLogger = new ConsoleLogger();

const routers: RouteController[] = [
  {
    route: "/users",
    controller: new UsersController(new UserService(), consoleLogger),
  },
];

const baseMiddlewares: NextHandleFunction[] = [bodyParser.json()];
const exceptionFilters: ExceptionFilter[] = [new ExceptionFilter(consoleLogger)];

// ==================================

function main(): void {
  const app = new App(express(), baseMiddlewares, routers, exceptionFilters, consoleLogger);
  app.init(8000);
}

main();

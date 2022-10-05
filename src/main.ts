import express from "express";
import { App } from "./app.js";
import { RouteController } from "./common/interfaces/routeController.interface.js";
import { ConsoleLogger } from "./services/logger/consoleLogger.service.js";
import { UsersController } from "./users/users.controller.js";

const consoleLogger = new ConsoleLogger();

const routers: RouteController[] = [
  {
    route: "/users",
    controller: new UsersController(consoleLogger),
  },
];

function main() {
  const app = new App(express(), routers, consoleLogger);
  app.init(8000);
}

main();

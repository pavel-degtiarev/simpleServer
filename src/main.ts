import express from "express";
import { App } from "./app.js";
import { ConsoleLogger } from "./services/logger/consoleLogger.service.js";

function main() {
  const app = new App(express(), new ConsoleLogger());
  app.init(8000);
}

main();

import express from "express";
import { App } from "./app.js";

import container from "./DI/bindings.js";
import { BIND_ID } from "./DI/identificators.js";

// ==================================

function main() {
  const app = container.get<App>(BIND_ID.App);
  app.init(express(), 8000);
}

main();

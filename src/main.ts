import express from "express";
import { App } from "./app.js";

function main() {
  const app = new App(express());
  app.init(8000);
}

main();

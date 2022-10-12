import { Router } from "express";
import { IRoute } from "./route.interface.js";

export interface IController {
  router: Router;
  bindRoutes: (routes: IRoute[]) => void;
}

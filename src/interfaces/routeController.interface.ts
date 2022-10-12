import { BaseController } from "../controllers/base.controller.js";

export interface RouteController {
  route: string;
  controller: BaseController;
}

import { BaseController } from "../base.controller.js";

export interface RouteController {
  route: string;
  controller: BaseController;
}

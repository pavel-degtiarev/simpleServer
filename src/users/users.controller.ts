import { BaseController } from "../common/base.controller.js";
import { ILogger } from "../common/interfaces/logger.interface.js";
import { userRoutes } from "./user.routes.js";

export class UsersController extends BaseController {
  constructor(logger: ILogger) {
    super(logger);
    this.bindRoutes(userRoutes);
  }
}

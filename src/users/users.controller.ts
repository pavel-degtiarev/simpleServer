import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller.js";
import { ILogger } from "../common/interfaces/logger.interface.js";

export class UsersController extends BaseController {
  constructor(logger: ILogger) {
    super(logger);
    this.bindRoutes([
      { method: "get", endpoint: "/", handler: this.root.bind(this) },
      { method: "post", endpoint: "/login", handler: this.login.bind(this) },
      { method: "post", endpoint: "/register", handler: this.register.bind(this) },
    ]);
  }

  root(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "");
  }

  login(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "login");
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, "register");
  }
}

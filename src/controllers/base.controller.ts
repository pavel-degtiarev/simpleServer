import { Response, Router } from "express";
import { ILogger } from "../services/logger/logger.interface.js";
import { IRoute } from "./route.interface.js";

export abstract class BaseController {
  private readonly _router: Router;
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
    this._router = Router();
  }

  protected bindRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.logger.log(`${route.method}`);
      this._router[route.method](route.endpoint, route.handler.bind(this));
    });
  }

  send<T>(res: Response, code: number, message: T) {
    return res.contentType("application.json").status(code).write(message);
  }

  ok<T>(res: Response, message: T) {
    return this.send(res, 200, message);
  }

  created(res: Response) {
    return res.sendStatus(201);
  }
}

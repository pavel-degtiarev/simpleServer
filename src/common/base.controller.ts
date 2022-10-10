import { Response, Router } from "express";
import { ILogger } from "./interfaces/logger.interface.js";
import { IRoute } from "./interfaces/route.interface.js";

type TResponse = Response<any, Record<string, any>>;

export abstract class BaseController {
  private readonly _router: Router;
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
    this._router = Router();
  }

  get router(): Router {
    return this._router;
  }

  protected bindRoutes(routes: IRoute[]): void {
    routes.forEach((route) => {
      this.logger.log(`Added method ${route.method} for ${route.endpoint}`);
      this._router[route.method](route.endpoint, route.handler.bind(this));
    });
  }

  send<T>(res: Response, code: number, message: T): TResponse {
    return res.contentType("application/json").status(code).json(message);
  }

  ok<T>(res: Response, message: T): TResponse {
    return this.send(res, 200, message);
  }

  created(res: Response): TResponse {
    return res.sendStatus(201);
  }
}

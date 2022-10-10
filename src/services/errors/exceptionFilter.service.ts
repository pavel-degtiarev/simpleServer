import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IException } from "../../common/interfaces/exceptionFilter.interface.js";
import { ILogger } from "../../common/interfaces/logger.interface.js";
import { BIND_ID } from "../../DI/identificators.js";
import { HTTPError } from "./httpError.js";

@injectable()
export class ExceptionFilter implements IException {
  logger: ILogger;

  constructor(@inject(BIND_ID.ILogger) logger: ILogger) {
    this.logger = logger;
    this.logger.log(`Exception filter attached`);
  }

  catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HTTPError) {
      this.logger.error(`[${err.context}] Error ${err.code}: ${err.message}`);
      res.status(err.code).send({ error: err.message });
    } else {
      this.logger.error(err.message);
      res.status(500).send({ error: err.message });
    }
  }
}

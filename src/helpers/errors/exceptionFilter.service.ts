import { NextFunction, Request, Response } from "express";
import { IException } from "../../interfaces/exceptionFilter.interface.js";
import { ILogger } from "../../interfaces/logger.interface.js";
import { HTTPError } from "./httpError.js";

export class ExceptionFilter implements IException {
  logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
    this.logger.log(`Exception filter attached`);

    this.catch = this.catch.bind(this);
  }

  catch(err: Error | HTTPError, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof HTTPError) {
      this.logger.error(`[${err.context}] Error ${err.code}: ${err.message}`);
      res.status(err.code).send({ error: err.message });
    } else {
      this.logger.error(err.message);
      res.status(500).send({ error: err.message });
    }
  }
}

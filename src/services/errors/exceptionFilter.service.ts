import { NextFunction, Request, Response } from "express";
import { IException } from "../../common/interfaces/exceptionFilter.interface.js";
import { ILogger } from "../../common/interfaces/logger.interface.js";
import { HTTPError } from "./httpError.js";

export class ExceptionFilter implements IException {
  logger: ILogger;

  constructor(logger: ILogger) {
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

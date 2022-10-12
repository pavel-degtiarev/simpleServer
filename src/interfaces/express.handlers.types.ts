import { NextFunction, Request, Response } from "express";

export type ExpressHandler = (req: Request, res: Response, next: NextFunction) => void;

export type ExpressErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type ExpressHandlerWithTypedReqBody<T> = (
  req: Request<{}, {}, T>,
  res: Response,
  next: NextFunction
) => void;

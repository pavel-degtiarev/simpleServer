import { ExpressHandler } from "./express.handlers.types.js";

export interface IMiddleware {
  execute: ExpressHandler;
}

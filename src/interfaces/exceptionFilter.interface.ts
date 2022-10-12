import { ExpressErrorHandler } from "./express.handlers.types.js";

export interface IException {
  catch: ExpressErrorHandler;
}

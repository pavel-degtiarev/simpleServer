import { Logger } from "tslog";
import { ILogger } from "../../common/interfaces/logger.interface.js";

export class ConsoleLogger implements ILogger {
  private logger: Logger;

  constructor() {
    this.logger = new Logger({
      displayInstanceName: false,
      displayLoggerName: false,
      displayFunctionName: false,
      displayFilePath: "hidden",
    });
  }

  log(...args: unknown[]): void {
    this.logger.info(...args);
  }

  warn(...args: unknown[]): void {
    this.logger.warn(...args);
  }

  error(...args: unknown[]): void {
    this.logger.error(...args);
  }
}

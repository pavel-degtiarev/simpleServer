import { Express, Router } from "express";
import { Server } from "http";
import { userRouter } from "./users/users.js";

export class App {
  expressApp: Express;
  server: Server;
  port: number;

  constructor(app: Express) {
    this.expressApp = app;
  }

  useRoute(route: string, router: Router) {
    this.expressApp.use(route, router);
  }

  init(port: number) {
    this.port = port;

    this.useRoute("/users", userRouter);

    this.server = this.expressApp.listen(this.port, () =>
      console.log(`Server started on port ${this.port}`)
    );
  }
}

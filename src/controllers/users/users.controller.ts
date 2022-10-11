import { NextFunction, Request, Response } from "express";
import { BaseController } from "../../common/base.controller.js";
import { ILogger } from "../../common/interfaces/logger.interface.js";
import { UserLoginDto } from "../../dto/user/userLogin.dto.js";
import { UserRegisterDto } from "../../dto/user/userRegister.dto.js";
import { User } from "../../entities/user/user.entity.js";
import { HTTPError } from "../../services/errors/httpError.js";

export class UsersController extends BaseController {
  constructor(logger: ILogger) {
    super(logger);
    this.bindRoutes([
      { method: "get", endpoint: "/", handler: this.root.bind(this) },
      { method: "post", endpoint: "/login", handler: this.login.bind(this) },
      { method: "post", endpoint: "/register", handler: this.register.bind(this) },
    ]);
  }

  root(req: Request, res: Response, next: NextFunction): void {
    this.ok(res, "");
  }

  login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
    // this.ok(res, "login");
    console.log(req.body);
    next(new HTTPError(401, "login error", "login"));
  }

  async register(
    req: Request<{}, {}, UserRegisterDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    console.log(req.body);
    const newUser = new User(req.body.name, req.body.email);
    await newUser.setPassword(req.body.password);

    this.ok(res, newUser);
  }
}

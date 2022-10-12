import { NextFunction, Request, Response } from "express";
import { BaseController } from "../base.controller.js";
import { ILogger } from "../../interfaces/logger.interface.js";
import { UserLoginDto } from "../../dto/user/userLogin.dto.js";
import { UserRegisterDto } from "../../dto/user/userRegister.dto.js";
import { HTTPError } from "../../helpers/errors/httpError.js";
import { UserService } from "../../services/user/user.service.js";

export class UsersController extends BaseController {
  constructor(private service: UserService, logger: ILogger) {
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
    const result = await this.service.createUser(req.body);
    if (!result) {
      return next(new HTTPError(422, "Такой пользователь уже существует"));
    }
    this.ok(res, result);
  }
}

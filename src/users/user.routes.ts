import { NextFunction, Request, Response } from "express";
import { IRoute } from "../common/interfaces/route.interface.js";

export const userRoutes: IRoute[] = [
  {
    method: "get",
    endpoint: "/",
    handler: function (req: Request, res: Response, next: NextFunction) {
      res.send("Users list");
    },
  },

  {
    method: "post",
    endpoint: "/login",
    handler: function (req: Request, res: Response, next: NextFunction) {
      res.send("login");
    },
  },

  {
    method: "post",
    endpoint: "/register",
    handler: function (req: Request, res: Response, next: NextFunction) {
      res.send("register");
    },
  },
];

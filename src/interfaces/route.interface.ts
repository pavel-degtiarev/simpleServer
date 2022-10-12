import { NextFunction, Request, Response, Router } from "express";

type Methods = "get" | "post" | "put" | "patch" | "delete";
export type RouterMethods = keyof Pick<Router, Methods>;

export interface IRoute {
  method: RouterMethods;
  endpoint: string;
  handler: (req: Request, res: Response, next: NextFunction) => void;
}

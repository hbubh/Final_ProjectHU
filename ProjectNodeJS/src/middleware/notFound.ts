import { RequestHandler } from "express";
import { AppError } from "../error/appError";

const notFound: RequestHandler = (req, res, next) => {
  return new AppError("Not Found", 404);
};
export { notFound };

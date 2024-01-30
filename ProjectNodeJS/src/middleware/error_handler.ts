import { ErrorRequestHandler } from "express";
import { AppError } from "../error/appError";
import { Logger } from "../logs/logger";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  Logger.error(err);
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message });
  }
  if (err.code && err.code === 11000 && err.keyPattern && err.keyValue) {
    return res.status(400).json({
      message: "Duplicate Key",
      property: err.keyValue,
      index: err.keyPattern,
    });
  }
  if (err instanceof SyntaxError) {
    return res.status(400).json({ message: "Invalid Json" });
  }
  return res.status(500).json({ message: "Internal Server Error" });
};

export { errorHandler };

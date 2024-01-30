import { RequestHandler } from "express";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { extractToken } from "./isAdmin";
import { AppError } from "../error/appError";

const isBusiness: RequestHandler = async (req, res, next) => {
  try {
    const token = extractToken(req);
    const { email } = verifyJWT(token);

    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("User does not exist", 401);
    }
    req.user = user;
    const isBusiness = user?.isBusiness;
    if (isBusiness) {
      return next();
    }

    throw new AppError("Must be business", 401);
  } catch (e) {
    next(e);
  }
};

export { isBusiness };

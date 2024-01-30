import { RequestHandler, Request } from "express";
import { AppError } from "../error/appError";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { extractToken } from "./isAdmin";

const validateToken: RequestHandler = async (req, res, next) => {
  try {
    const token = extractToken(req);
    const { email } = verifyJWT(token);
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("User does not exist", 401);
    }
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
export { validateToken };

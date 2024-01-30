import { RequestHandler, Request } from "express";
import { AppError } from "../error/appError";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";

const extractToken = (req: Request) => {
  const authHeader = req.header("Authorization");

  if (
    authHeader &&
    authHeader.length > 7 &&
    authHeader.toLowerCase().startsWith("bearer ")
  ) {
    return authHeader.substring(7);
  }
  throw new AppError("token is missing in Authorization header", 400);
};

const isAdmin: RequestHandler = async (req, res, next) => {
  try {
    const token = extractToken(req);
    const { email } = verifyJWT(token);
    const user = await User.findOne({ email });
    const isAdmin = user?.isAdmin;
    if (isAdmin) {
      return next();
    } else throw new AppError("Token doesn't Match: must be Admin ", 401);
  } catch (e) {
    next(e);
  }
};

export { isAdmin, extractToken };

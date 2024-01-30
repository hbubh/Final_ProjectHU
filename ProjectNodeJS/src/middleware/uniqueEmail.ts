import { RequestHandler, Request } from "express";
import { AppError } from "../error/appError";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";

const uniqueEmail: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return next();
    } else throw new AppError("Email-used, Try another Email ", 401);
  } catch (e) {
    next(e);
  }
};

export { uniqueEmail };

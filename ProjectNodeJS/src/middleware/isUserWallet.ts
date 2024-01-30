import { RequestHandler, Request } from "express";
import { AppError } from "../error/appError";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { extractToken } from "./isAdmin";
import { IUser } from "../@types/user";

const isUserByEmail: RequestHandler = async (req, res, next) => {
  try {
    const token = extractToken(req);
    const { email } = verifyJWT(token);
    const user = (await User.findOne({ email: email })) as IUser;
    req.user = user;
    if (!user) throw new AppError("User does not exist TokenERR", 401);
    const emailuser = req.body.email;
    if (req.user.email == emailuser) return next();
    else
      throw new AppError(
        `Token doesn't Match the userId ${emailuser} != ${user.email}`,
        401
      );
  } catch (e) {
    next(e);
  }
};

export { isUserByEmail };

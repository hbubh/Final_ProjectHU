import { RequestHandler, Request } from "express";
import { AppError } from "../error/appError";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { extractToken } from "./isAdmin";
import { isValidObjectId } from "mongoose";

const isAdminOrUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const valid = isValidObjectId(id);
    if (!valid) {
      throw new AppError("The Id is not type of ObjectId", 401);
    }
    const userExist = await User.findById(id);
    if (!userExist) throw new AppError("User does not exist 111", 401);
    const token = extractToken(req);
    const { email } = verifyJWT(token);
    const user = await User.findOne({ email: email });
    if (!user) throw new AppError("User does not exist 222", 401);
    req.user = user;
    if (id == user.id) {
      req.user = user;
      return next();
    }
    if (user.isAdmin == true) {
      req.user = userExist;
      return next();
    } else
      throw new AppError("Token doesn't Match the useId or invalid Token", 401);
  } catch (e) {
    next(e);
  }
};

export { isAdminOrUser };

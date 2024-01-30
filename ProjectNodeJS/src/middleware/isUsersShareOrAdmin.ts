import { RequestHandler } from "express";
import { extractToken } from "./isAdmin";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { Share } from "../database/model/share";
import { AppError } from "../error/appError";
import { IUser } from "../@types/user";
import { isValidObjectId } from "mongoose";
import { IShareS } from "../@types/share";

const isUsersShareOrAdmin: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params; //
    const valid = isValidObjectId(id);
    if (!valid) {
      throw new AppError("The Id is not type of ObjectId", 401);
    }
    const shareExist = await Share.findById(id);
    if (!shareExist) throw new AppError("Share does not exist", 401);
    const token = extractToken(req);
    const { email } = verifyJWT(token);
    const user = (await User.findOne({ email: email }).lean()) as IUser;
    req.user = user;
    req.share = shareExist;
    const share = (await Share.findById({ _id: id })) as IShareS;
    if (!share) throw new AppError("Share does not exist", 401);
    if (share.userId == user._id) return next();
    if (user.isAdmin) return next();
    else
      throw new AppError(
        "Only the user who created or admin the share can delete the card",
        401
      );
  } catch (e) {
    next(e);
  }
};

export { isUsersShareOrAdmin };

import { RequestHandler } from "express";
import { extractToken } from "./isAdmin";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { AppError } from "../error/appError";
import { IUser } from "../@types/user";
import { isValidObjectId } from "mongoose";
import { Share } from "../database/model/share";
import { IShare, IShareS } from "../@types/share";

const isUserShare: RequestHandler = async (req, res, next) => {
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

    //get user from database
    const user = (await User.findOne({ email: email }).lean()) as IUser;
    req.user = user;
    const share = (await Share.findById({ _id: id })) as IShareS;
    if (!share) throw new AppError("share does not exist", 401);
    if (share.userId == user._id) {
      req.share = share;
      return next();
    } else
      throw new AppError(
        "Only the user who created the share can edit the share",
        401
      );
  } catch (e) {
    next(e);
  }
};

export { isUserShare };

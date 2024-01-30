import { RequestHandler, Request } from "express";
import { AppError } from "../error/appError";
import { verifyJWT } from "../service/auth_service";
import { User } from "../database/model/user";
import { extractToken } from "./isAdmin";
import { IUser } from "../@types/user";
import { Share } from "../database/model/share";

const deleteUserShare: RequestHandler = async (req, res, next) => {
  try {
    const { myShares } = req.user;
    for (let i of myShares) {
      const share = await Share.findById(i.shareId);
      for (let x = 0; x < share.owners.length; x++) {
        if (share.owners[x].userId == req.user._id) {
          share.owners.splice(x, 1);
          x--;
          const updateShare = await Share.findByIdAndUpdate(
            { _id: i.shareId },
            { $set: { owners: share.owners } },
            {
              new: true,
            }
          );
        }
      }
    }
    next();
  } catch (e) {
    next(e);
  }
};

export { deleteUserShare };

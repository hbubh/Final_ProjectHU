import { RequestHandler } from "express";
import { Share } from "../database/model/share";
import { AppError } from "../error/appError";
import { User } from "../database/model/user";

const updateOwnersBuy: RequestHandler = async (req, res, next) => {
  try {
    let findShare = false;
    const userId = req.user._id;
    const { share, num } = req.body.shares;
    if (num <= 0) {
      throw new AppError(`Cannot order with invalid Number: ${num}`, 401);
    }
    const shareExist = await Share.findById(share);
    if (!shareExist)
      throw new AppError(`Share does not exist ${shareExist}`, 401);
    const userObj = {
      userId: userId,
      pcs: num,
    };
    const shareUsers = shareExist.owners;
    for (let i of shareUsers) {
      if (i.userId == userObj.userId) {
        i.pcs += +userObj.pcs;
        findShare = true;
        break;
      }
    }
    if (!findShare) {
      shareUsers.push(userObj);
    }
    const costs = +req.body.costs;
    const wallet = +req.user.wallet - costs;
    console.log(wallet);
    if (wallet < 0) {
      throw new AppError(`You don't have enough money to do this`, 401);
    }
    const save = await Share.findByIdAndUpdate(
      share,
      { $set: { owners: shareUsers } },
      { new: true }
    );
    const user = await User.findById(shareExist.userId);
    const userUpdate = await User.findByIdAndUpdate(
      shareExist.userId,
      { $set: { wallet: (user.wallet += costs) } },
      { new: true }
    );
    next();
  } catch (e) {
    next(e);
  }
};
const updateOwnersSell: RequestHandler = async (req, res, next) => {
  try {
    let findShare = false;
    const userId = req.user._id;
    const { share, num } = req.body.shares;
    if (num <= 0) {
      throw new AppError(`Cannot order with invalid Number: ${num}`, 401);
    }
    const shareExist = await Share.findById(share);
    if (!shareExist)
      throw new AppError(`Share does not exist ${shareExist}`, 401);
    const userObj = {
      userId: userId,
      pcs: num,
    };
    const shareUsers = shareExist.owners;
    for (let i of shareUsers) {
      if (i.userId == userObj.userId) {
        if (i.pcs >= userObj.pcs) {
          i.pcs -= +userObj.pcs;
          findShare = true;
          if (i.pcs == 0) {
            const indexToRemove = shareUsers.indexOf(i);
            if (indexToRemove !== -1) {
              shareUsers.splice(indexToRemove, 1);
            } else {
            }
          }
          break;
        } else {
          throw new AppError(
            "The user does not have enough shares to perform the operation",
            401
          );
        }
      }
    }
    if (!findShare) {
      shareUsers.push(userObj);
    }
    const costs = +req.body.costs;
    const save = await Share.findByIdAndUpdate(
      share,
      { $set: { owners: shareUsers } },
      { new: true }
    );
    const user = await User.findById(shareExist.userId);
    const userUpdate = await User.findByIdAndUpdate(
      shareExist.userId,
      { $set: { wallet: (user.wallet -= costs) } },
      { new: true }
    );
    next();
  } catch (e) {
    next(e);
  }
};

export { updateOwnersBuy, updateOwnersSell };

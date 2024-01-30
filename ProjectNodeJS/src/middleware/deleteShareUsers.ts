import { RequestHandler } from "express";
import { User } from "../database/model/user";

const deleteSharesUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userShare = await User.findById(req.share.userId);
    let userWallet = +userShare.wallet;
    const { owners } = req.share;
    for (let i of owners) {
      const user = await User.findById(i.userId);
      for (let x = 0; x < user.myShares.length; x++) {
        if (user.myShares[x].shareId == id) {
          let costs = req.share.price[1];
          userWallet -= +costs;
          user.wallet += +costs;
          user.myShares.splice(x, 1);
          x--;
          const updateUser = await User.findByIdAndUpdate(
            { _id: i.userId },
            { $set: { myShares: user.myShares, wallet: user.wallet } },
            {
              new: true,
            }
          );
          const shareUser = await User.findByIdAndUpdate(
            { _id: req.share.userId },
            { $set: { wallet: userWallet } },
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

export { deleteSharesUser };

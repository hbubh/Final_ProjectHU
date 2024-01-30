import { RequestHandler } from "express";
import { AppError } from "../error/appError";

const isShare: RequestHandler = (req, res, next) => {
  try {
    let findShare = false;
    const { costs } = req.body;
    const { share, num } = req.body.shares;
    const shareObj = {
      shareId: share,
      pcs: num,
      costs: costs,
    };
    const userShares = req.user.myShares;
    for (let i of userShares) {
      if (i.shareId == shareObj.shareId) {
        if (i.pcs >= shareObj.pcs) {
          i.pcs -= +shareObj.pcs;
          i.costs -= shareObj.costs;
          findShare = true;
          if (i.pcs == 0) {
            const indexToRemove = userShares.indexOf(i);
            if (indexToRemove !== -1) {
              userShares.splice(indexToRemove, 1);
              console.log("Array after removing element:", userShares);
            } else {
              console.log("Element not found in the array.");
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
      throw new AppError(
        "The user does not have this shares to perform the operation",
        401
      );
    }
    req.user.myShares = userShares;
    next();
  } catch (e) {
    next(e);
  }
};

export { isShare };

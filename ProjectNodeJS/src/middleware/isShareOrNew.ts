import { RequestHandler } from "express";

const isShareOrNew: RequestHandler = (req, res, next) => {
  try {
    let findShare = false;
    const { share, num } = req.body.shares;
    const { costs } = req.body;
    const shareObj = {
      shareId: share,
      pcs: num,
      costs: costs,
    };
    const userShares = req.user.myShares;
    for (let i of userShares) {
      if (i.shareId == shareObj.shareId) {
        i.pcs += +shareObj.pcs;
        i.costs += +shareObj.costs;
        findShare = true;
        break;
      }
    }
    if (!findShare) {
      userShares.push(shareObj);
    }
    req.user.myShares = userShares;
    next();
  } catch (e) {
    next(e);
  }
};

export { isShareOrNew };

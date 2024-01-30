import { Router } from "express";
import { validataShareAdd } from "../middleware/validation";
import { Share } from "../database/model/share";
import { IShare } from "../@types/share";
import { createShare } from "../service/share_Service";
import { isBusiness } from "../middleware/isBusiness";
import { validateToken } from "../middleware/validateJWT";
import { isUserShare } from "../middleware/isUsersShare";
import { isUsersShareOrAdmin } from "../middleware/isUsersShareOrAdmin";
import changePrice from "../middleware/changePrice";
import { number } from "joi";
import { isUserByEmail } from "../middleware/isUserWallet";
import { deleteSharesUser } from "../middleware/deleteShareUsers";

const sharesRouter = Router();

//get all shares
sharesRouter.get("/", async (req, res, next) => {
  try {
    const allShares = await Share.find();
    return res.json(allShares);
  } catch (err) {
    next(err);
  }
});
//changePrice all shares
sharesRouter.get("/changeprice", changePrice, async (req, res, next) => {
  const arrPrices = req.sharePrice;
  for (let i of arrPrices) {
    let { price, _id } = i;
    const setPrice = await Share.findByIdAndUpdate(
      _id,
      { $set: { price: price } },
      {
        new: true,
      }
    );
  }
  try {
    return res.json({ message: "StockPrices updated" });
  } catch (err) {
    next(err);
  }
});

//get my shares
sharesRouter.get("/my-shares", validateToken, async (req, res, next) => {
  try {
    const userId = req.user?._id;
    const shares = await Share.find({ userId });
    if (!shares.length) {
      return res.json({ message: "No Stocks for this user", shares });
    }
    return res.json(shares);
  } catch (e) {
    next(e);
  }
});

/* //GET share by id
sharesRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const share = (await Share.findById(id)) as IShare;
    res.json(share);
  } catch (e) {
    next(e);
  }
}); */

//get a specific share
sharesRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const share = await Share.findById(id);
    return res.json({ share: share });
  } catch (e) {
    next(e);
  }
});

//Delete a specific share by  the same user or Admin
sharesRouter.delete(
  "/:id",
  isUserShare,
  deleteSharesUser,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const share = await Share.findByIdAndDelete(id);
      return res.json({ user: share });
    } catch (e) {
      next(e);
    }
  }
);

//update full share by user
sharesRouter.put("/:id", isUserShare, async (req, res, next) => {
  try {
    const savedShare = await Share.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(savedShare);
  } catch (err) {
    next(err);
  }
});

/* //update owners Buy
sharesRouter.patch(
  "/owners/userbuy",
  isUserByEmail,
  isUserOrNew,
  async (req, res, next) => {
    try {
      const userId = req.user._id;
      const saved = await Share.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { likes: userId } },
        {
          new: true,
        }
      );
      res.json({ saved });
    } catch (e) {
      next(e);
    }
  }
); */

// register share
sharesRouter.post(
  "/",
  isBusiness,
  isUserByEmail,
  validataShareAdd,
  async (req, res, next) => {
    try {
      const userId = req.user._id;
      const saved = await createShare(req.body as IShare, userId);
      res.status(201).json({ massege: "Saved", share: saved });
    } catch (err) {
      next(err);
    }
  }
);

export { sharesRouter };

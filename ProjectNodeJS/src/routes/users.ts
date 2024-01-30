import { Router } from "express";
import { User } from "../database/model/user";
import {
  validataUserEdit,
  validataUserLogin,
  validataUserRegister,
} from "../middleware/validation";
import { ILogin, IUser } from "../@types/user";
import { createUser, validateUser } from "../service/user_Service";
import { isAdmin } from "../middleware/isAdmin";
import { isAdminOrUser } from "../middleware/isAdminOrUser";
import { isUser } from "../middleware/isUser";
import { hashPassword } from "../service/auth_service";
import { isUserByEmail } from "../middleware/isUserWallet";
import { isShareOrNew } from "../middleware/isShareOrNew";
import { isShare } from "../middleware/isShare";
import {
  updateOwnersBuy,
  updateOwnersSell,
} from "../middleware/updateShareOwners";
import { AppError } from "../error/appError";
import { log } from "console";
import { uniqueEmail } from "../middleware/uniqueEmail";
import { deleteUserShare } from "../middleware/deleteUserShares";
const usersRouter = Router();

//get all users Admin
usersRouter.get("/", isAdmin, async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});

//update full user by user
usersRouter.put(
  "/:id",
  isAdminOrUser,
  validataUserEdit,
  async (req, res, next) => {
    try {
      const { password, ...saved } = await User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.json({ saved });
    } catch (e) {
      next(e);
    }
  }
);

//get a specific user by admin or the same user
usersRouter.get("/:id", isAdminOrUser, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).lean();
    const { password, ...rest } = user;
    return res.json({ user: rest });
  } catch (e) {
    next(e);
  }
});

//Delete a specific user by  the same user or Admin
usersRouter.delete(
  "/:id",
  isAdminOrUser,
  deleteUserShare,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id).lean();
      if (user.email == "admin@gmail.com") {
        throw new AppError(`You Cannot Delete My Admin!`, 401);
      }
      const user1 = await User.findByIdAndDelete(id).lean();
      return res.json({ user: user1 });
    } catch (e) {
      next(e);
    }
  }
);

//update bizz by Admin
usersRouter.patch("/:id", isAdmin, async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).lean();
    req.user = user;
    let isBusiness = req.user.isBusiness;
    if (isBusiness == false) {
      isBusiness = true;
    }
    const saved = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { isBusiness: isBusiness } },
      {
        new: true,
      }
    );
    res.json({ saved });
  } catch (e) {
    next(e);
  }
});

//update Pro by user
usersRouter.patch("/plan/pro", isUserByEmail, async (req, res, next) => {
  try {
    const isPro = !req.user.isPro;
    const saved = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: { isPro: isPro } },
      {
        new: true,
      }
    );
    res.json({ saved });
  } catch (e) {
    next(e);
  }
});
//option 2 for buz
usersRouter.patch("/plan/buz", isUserByEmail, async (req, res, next) => {
  try {
    const isBusiness = !req.user.isBusiness;
    const saved = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: { isBusiness: isBusiness } },
      {
        new: true,
      }
    );
    res.json({ saved });
  } catch (e) {
    next(e);
  }
});

//update wallet by user
usersRouter.patch("/wallet/charge", isUserByEmail, async (req, res, next) => {
  try {
    const wallet = req.body.wallet;
    const lastWallet = req.user.wallet;
    const lastCharged = req.user.charged;
    const { email } = req.user;
    const saved = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          wallet: +lastWallet + +wallet,
          charged: +lastCharged + +wallet,
        },
      },
      {
        new: true,
      }
    );
    res.json({ saved });
  } catch (e) {
    next(e);
  }
});

//buy shares by user
usersRouter.patch(
  "/wallet/buyShare",
  isUserByEmail,
  updateOwnersBuy,
  isShareOrNew,
  async (req, res, next) => {
    try {
      const emailuser = req.body.email;
      const costs = +req.body.costs;
      const wallet = +req.user.wallet - +costs;
      const userShares = req.user.myShares;
      if (wallet <= 0) {
        throw new AppError(`You don't have enough money to do this`, 401);
      }
      const saved = await User.findOneAndUpdate(
        { email: emailuser },
        { $set: { myShares: userShares, wallet: wallet } },
        {
          new: true,
        }
      );
      res.json({ saved });
    } catch (e) {
      next(e);
    }
  }
);
//sell shares by user
usersRouter.patch(
  "/wallet/sellShare",
  isUserByEmail,
  updateOwnersSell,
  isShare,
  async (req, res, next) => {
    try {
      const { email } = req.user;
      const profit = +req.body.costs;
      const wallet = +req.user.wallet + profit;
      const userShares = req.user.myShares;
      const saved = await User.findOneAndUpdate(
        { email: email },
        { $set: { myShares: userShares, wallet: wallet } },
        {
          new: true,
        }
      );
      res.json({ saved });
    } catch (e) {
      next(e);
    }
  }
);

// register user
usersRouter.post(
  "/",
  validataUserRegister,
  uniqueEmail,
  async (req, res, next) => {
    try {
      const saved = createUser(req.body as IUser);
      const { password, ...rest } = req.body;
      res.status(201).json({ massege: "Saved", user: rest });
    } catch (err) {
      next(err);
    }
  }
);

//login user
usersRouter.post("/login", validataUserLogin, async (req, res, next) => {
  try {
    const { password, email } = req.body as ILogin;
    const jwt = await validateUser(email, password);
    res.json(jwt);
  } catch (err) {
    next(err);
  }
});
export { usersRouter };

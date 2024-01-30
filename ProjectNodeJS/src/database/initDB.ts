import { shares } from "./shares";
import { Share } from "./model/share";
import { User } from "./model/user";
import { users } from "./users";

const initDBUsers = async () => {
  const usersCount = await User.countDocuments();
  if (usersCount != 0) return;

  for (let user of users) {
    const saved = await new User(user).save();
  }
};

const initDBShares = async (userId) => {
  const sharesCount = await Share.countDocuments();
  if (sharesCount != 0) return;

  for (let share of shares) {
    share.userId = userId;
    const saved = await new Share(share).save();
  }
};

export { initDBUsers, initDBShares };

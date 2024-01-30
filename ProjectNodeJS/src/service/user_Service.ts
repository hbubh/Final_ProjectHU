import { IUser } from "../@types/user";
import { User } from "../database/model/user";
import { AppError } from "../error/appError";
import { generateJWT, hashPassword, valdiatePassword } from "./auth_service";

const createUser = async (userData: IUser) => {
  const user = new User(userData);
  user.password = await hashPassword(user.password);
  return user.save();
};

const validateUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError("Bad credentials", 401);
  }
  const isPasswordValid = await valdiatePassword(password, user.password);
  if (!isPasswordValid) {
    throw new AppError("Bad credentials", 401);
  }
  const { _id, name, isBusiness, isPro, isAdmin } = user;
  const { first, last } = name;
  const jwt = generateJWT({
    _id,
    isBusiness,
    isPro,
    first,
    last,
    email,
    isAdmin,
  });
  return { jwt };
};

export { createUser, validateUser };

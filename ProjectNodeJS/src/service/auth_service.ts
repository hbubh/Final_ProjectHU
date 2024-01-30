import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IJWTPayload } from "../@types/user";

const hashPassword = (plainTextPassword: string, rounds = 12) => {
  return bcrypt.hash(plainTextPassword, rounds);
};

const valdiatePassword = (plainTextPassword: string, hash: string) => {
  return bcrypt.compare(plainTextPassword, hash);
};

const generateJWT = (payload: IJWTPayload) => {
  const secret = process.env.JWT_SECRET!;
  return jwt.sign(payload, secret);
};

const verifyJWT = (token: string) => {
  const secret = process.env.JWT_SECRET!;
  const payload = jwt.verify(token, secret);
  return payload as IJWTPayload;
};

export { hashPassword, valdiatePassword, generateJWT, verifyJWT };

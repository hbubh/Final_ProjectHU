import Joi from "joi";
import { passwordRegex } from "./patterns";
import { ILogin } from "../@types/user";

const loginSchemaJoi = Joi.object<ILogin>({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(passwordRegex).required(),
});

export { loginSchemaJoi };

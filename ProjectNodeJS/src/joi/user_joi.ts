import Joi from "joi";
import { IAddress, IImage, IName, IUser } from "../@types/user";
import { passwordRegex, phoneRegex } from "./patterns";

const registerSchemaJoi = Joi.object<IUser>({
  address: Joi.object<IAddress>({
    city: Joi.string().min(2).max(50).required(),
    country: Joi.string().min(1).max(50).required(),
    houseNumber: Joi.string().min(1).max(20).required(),
    street: Joi.string().min(1).max(50).required(),
    zip: Joi.number().min(0).max(200000000).allow(""),
    state: Joi.string().max(50).allow(""),
  }).required(),
  email: Joi.string().email().min(5).max(255).required(),
  name: Joi.object<IName>({
    first: Joi.string().min(1).max(50).required(),
    last: Joi.string().min(1).max(100).required(),
    middle: Joi.string().max(100).allow(""),
  }).required(),

  password: Joi.string().pattern(passwordRegex).min(5).max(30).required(),
  phone: Joi.string().min(9).max(15).required(),
  image: Joi.object<IImage>({
    alt: Joi.string().min(0).max(100).allow(""),
    url: Joi.string().uri().min(5).max(255).allow(""),
  }),
});

export { registerSchemaJoi };

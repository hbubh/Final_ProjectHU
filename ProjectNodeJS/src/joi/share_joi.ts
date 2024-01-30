import Joi from "joi";
import { IAddress, IImage } from "../@types/user";
import { IShareS, IShare } from "../@types/share";
import { phoneRegex } from "./patterns";

const shareSchemaJoi = Joi.object<IShareS>({
  title: Joi.string().min(2).max(20).required(),
  subtitle: Joi.string().min(2).max(50).required(),
  description: Joi.string().min(2).max(200).required(),
  phone: Joi.string().min(9).max(15).required(),
  email: Joi.string().email().min(5).max(255).required(),
  web: Joi.string().allow(""),
  image: Joi.object<IImage>({
    alt: Joi.string().allow(""),
    url: Joi.string().allow(""),
  }),
  address: Joi.object<IAddress>({
    city: Joi.string().min(2).max(50).required(),
    country: Joi.string().min(1).max(50).required(),
    houseNumber: Joi.string().min(1).max(20).required(),
    street: Joi.string().min(1).max(50).required(),
    zip: Joi.number().min(0).max(20000000).allow(""),
    state: Joi.string().max(50).allow(""),
  }).required(),
});

export { shareSchemaJoi };

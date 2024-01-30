import Joi from "joi";
import validation from "./validation";

const EditSchema = Joi.object({
  first: Joi.string().required(),
  middle: Joi.string().allow(""),
  last: Joi.string().required(),
  phone: Joi.string().min(9).max(15).required(),
  url: Joi.string().allow(""),
  alt: Joi.string().allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number().allow(""),
});

const validateEditUser = (inputToCheck) => validation(EditSchema, inputToCheck);

export { validateEditUser };

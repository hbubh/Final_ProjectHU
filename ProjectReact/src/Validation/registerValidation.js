import Joi from "joi";
import validation from "./validation";

const registerSchema = Joi.object({
  first: Joi.string().required(),
  middle: Joi.string().allow(""),
  last: Joi.string().required(),
  phone: Joi.string().min(9).max(15).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{6,}$/
      )
    )
    .messages({
      "string.pattern.base":
        " password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
      "string.empty": "password cannot be a empty",
    })
    .min(8)
    .max(20)
    .required(),
  url: Joi.string().allow(""),
  alt: Joi.string().allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number().allow(""),
});

const validateRegister = (inputToCheck) =>
  validation(registerSchema, inputToCheck);

export { validateRegister };

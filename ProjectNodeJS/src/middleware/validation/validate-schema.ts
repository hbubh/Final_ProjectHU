import { RequestHandler } from "express";
import validations from "../../joi/break_Error";
import { ObjectSchema } from "joi";

type ValidateSchema = (schema: ObjectSchema) => RequestHandler;

const validateSchema: ValidateSchema = (schema) => (req, res, next) => {
  const err = validations(schema, req.body);
  if (!err) return next();
  console.log(err.message);
  res.status(400).json(err);
};

export { validateSchema };

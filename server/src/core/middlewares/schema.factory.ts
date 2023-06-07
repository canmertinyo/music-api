import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from "../../utils/status_codes/api.response";

export const validateSchema = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }
    next();
  };
};

import Joi from "joi";

export function login() {
  try {
    const schema = Joi.object({
      email: Joi.string().required().trim(),
      password: Joi.string().alphanum().required().trim(),
    });

    return schema;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

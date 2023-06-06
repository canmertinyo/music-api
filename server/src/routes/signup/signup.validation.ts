import Joi from "joi";

export class SignupValidation {
  public signup() {
    try {
      const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(12).required(),
        password: Joi.string()
          .required()
          .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        email: Joi.string().required().email(),
      });
      return schema;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

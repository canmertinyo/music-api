import Joi from "joi";

export class SignupValidation {
  public signup() {
    try {
      const schema = Joi.object({
        username: Joi.string().min(3).max(12).required().trim(),
        password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).trim(),
        email: Joi.string().required().email().trim(),
      });
      return schema;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

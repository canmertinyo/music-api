import Joi from "joi";
import { Inject } from "../../core/decorators/dependency.injection";

@Inject()
export default class Validate {
  public login() {
    try {
      const schema = Joi.object({
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
      });

      return schema;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

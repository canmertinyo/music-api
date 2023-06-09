import { Container, Inject } from "./dependency.injection";
import ValidateLogin from "../../routes/login/login.validation";
import { SignupValidation } from "../../routes/signup/signup.validation";
import { LoginController } from "../../routes/login/login.controller";
import { signupUser } from "../../routes/signup/signup.controller";

const container = new Container();
container.register("ValidateLogin", new ValidateLogin());
container.register("SignupValidation", new SignupValidation());
container.register("LoginController", new LoginController());
container.register("signupUser", signupUser);

export function resolveContainerFactory(key: string, dependency: any) {
  return container.resolve<typeof dependency>(key);
}

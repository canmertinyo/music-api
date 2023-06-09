import { Container } from "./dependency.injection";
import ValidateLogin from "../../routes/login/login.validation";
import { SignupValidation } from "../../routes/signup/signup.validation";
import { LoginController } from "../../routes/login/login.controller";
import { signupUser } from "../../routes/signup/signup.controller";

const container = new Container();

export function resolveContainerFactory(key: string, dependency: any) {
  return container.resolve<typeof dependency>(key);
}

export function containerRegisterFactory(key: string, dependency: any) {
  return container.register(key, dependency);
}
containerRegisterFactory("ValidateLogin", new ValidateLogin());
containerRegisterFactory("SignupValidation", new SignupValidation());
containerRegisterFactory("LoginController", new LoginController());
containerRegisterFactory("signupUser", signupUser);

import { Container } from "./dependency.injection";
import ValidateLogin from "../../routes/login/login.validation";
import { LoginController } from "../../routes/login/";
import { signupUser, SignupValidation } from "../../routes/signup/";

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
containerRegisterFactory("signupUser", signupUser); //Convert to class

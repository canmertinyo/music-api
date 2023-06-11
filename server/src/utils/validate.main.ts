import config from "../config/config";
import {
  NodeEnvException,
  PortException,
  BlankJwtSecretException,
  BlankDbUriException,
  BlankJwtPrivateKeyException,
  BlankJwtPublicKeyException,
} from "../exceptions";

export function validateMainBeforeExecute() {
  const errors: Array<Error> = [];
  if (config.NODE_ENV !== "development") {
    errors.push(
      new NodeEnvException(
        `You can't server because you are in ${config.NODE_ENV} mode! please switch to 'development' mode if you want to change something`
      )
    );
  }
  if (!config.port) {
    errors.push(new PortException(`Please define your port before launching the app! ${config.port}`));
  }
  if (!config.JWT_SECRET) {
    errors.push(new BlankJwtSecretException(`Jwt secret code can't be empty please define it before launch the app!`));
  }

  if (!config.db_uri) {
    errors.push(
      new BlankDbUriException(`Db uri can't be blank or undefined. Please add your db uri before launching the app!`)
    );
  }

  if (!config.JWT_PRIVATE_KEY) {
    errors.push(
      new BlankJwtPrivateKeyException(
        `Jwt private key can't be empty, generate your jwt private and public key to use this api! Generate your keys here : https://travistidwell.com/jsencrypt/demo/`
      )
    );
  }

  if (!config.JWT_PUBLIC_KEY) {
    errors.push(
      new BlankJwtPublicKeyException(
        `Jwt private key can't be empty, generate your jwt private and public key to use this api! Generate your keys here : https://travistidwell.com/jsencrypt/demo/`
      )
    );
  }

  if (errors.length > 0) {
    throw errors;
  }
}

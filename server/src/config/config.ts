import { cleanEnv, num, str } from "envalid";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default cleanEnv(process.env, {
  db_uri: str(),
  port: num({ default: 3001 }),
  JWT_SECRET: str(),
  NODE_ENV: str({
    default: "development",
    choices: ["development", "production"],
  }),
  JWT_PRIVATE_KEY: str(),
  JWT_PUBLIC_KEY: str(),
  HASH_ROUNDS: num(),
});

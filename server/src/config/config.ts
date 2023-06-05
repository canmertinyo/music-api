import { cleanEnv, num, str } from "envalid";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default cleanEnv(process.env, {
  db_uri: str(),
  port: num({ default: 3001 }),
});

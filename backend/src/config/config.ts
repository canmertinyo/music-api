import envalid, { str } from 'envalid';

export const config = envalid.cleanEnv(process.env, {
  dbUri: str(),
});

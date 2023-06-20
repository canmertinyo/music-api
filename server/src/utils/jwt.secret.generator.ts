import bcrypt from 'bcrypt';
import config from '../config/config';
import crypto from 'crypto';

function generateRandomString<T extends number>(length: T): string {
  let secret = '';
  const characters = `qwertsdfghjklizxcvbnmASLDFJHFDSKFSADJKA^/%&G#>£ß#>#£æßdß£>#aßæßdadsdfDSFJKHSFKJ123327123843534`;

  for (let index = 0; index < length; index++) {
    let randomIndexGenerator = crypto.randomInt(0, characters.length);
    secret += characters[randomIndexGenerator];
  }
  const storeOriginalJwtSecret = secret; //store original secret key. In the next commit i will add compare function to check given values are correct or not.
  return secret;
}

export async function generateJwtSecret(length: number): Promise<string> {
  const secret = generateRandomString(length);

  return new Promise<string>((resolve, reject) => {
    bcrypt.genSalt(config.HASH_ROUNDS, (err, salt) => {
      if (err) reject(err);

      bcrypt.hash(secret, salt, (err, crypted) => {
        if (err) reject(err);

        console.log('jwt key : ', crypted);
        resolve(crypted);
      });
    });
  });
}

//This function is planned to be implemented in the future.
//It has no affect right now.
export async function compareJwtSecret() {}

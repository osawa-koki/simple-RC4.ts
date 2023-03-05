import yargs, { Arguments } from "yargs";
import { encrypt, decrypt } from "./RC4";

(async () => {
  const argv: Arguments = await yargs(process.argv)
    .option("k", {
      alias: "key",
      describe: "暗号化キー",
      demandOption: true,
      type: "string",
    })
    .option("m", {
      alias: "message",
      describe: "暗号化するメッセージ",
      demandOption: true,
      type: "string",
    }).argv;

  const key: string = argv.key as string;
  const message: string = argv.message as string;

  console.log(`key: ${key}`);
  console.log(`message: ${message}`);

  const encryptResult: string = encrypt(message, key);
  const decryptResult: string = decrypt(encryptResult, key);

  console.log(`encrypt: ${encryptResult}`);
  console.log(`decrypt: ${decryptResult}`);
})();

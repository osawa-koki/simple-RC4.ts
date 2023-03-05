import { encrypt, decrypt } from './RC4';

console.log("Hello, TypeScript!");

const data = 'Hello, world!';
const key = 'my_secret_key';
const encrypted = encrypt(data, key);
console.log(encrypted);
const decrypted = decrypt(encrypted, key);
console.log(decrypted);

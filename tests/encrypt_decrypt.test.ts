import { encrypt, decrypt } from "../src/RC4";

describe("RC4 encryption and decryption", () => {
  const message = "hello world";
  const key1 = "my secret key";
  const key2 = "another secret key";

  it("should encrypt and decrypt the message correctly with the same key", () => {
    const encrypted = encrypt(message, key1);
    const decrypted = decrypt(encrypted, key1);
    expect(decrypted).toEqual(message);
  });

  it("should not decrypt the message correctly with a different key", () => {
    const encrypted = encrypt(message, key1);
    const decrypted = decrypt(encrypted, key2);
    expect(decrypted).not.toEqual(message);
  });

  it("should encrypt and decrypt random messages correctly with the same key", () => {
    for (let i = 0; i < 10; i++) {
      const randomMessage = Math.random().toString(36).substring(2);
      const encrypted = encrypt(randomMessage, key1);
      const decrypted = decrypt(encrypted, key1);
      expect(decrypted).toEqual(randomMessage);
    }
  });
});

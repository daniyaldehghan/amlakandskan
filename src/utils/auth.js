import { hash, compare } from "bcryptjs";

async function hashdPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password, hashedPassword) {
  const vrify = await compare(password, hashedPassword);
  return vrify;
}

export { hashdPassword, verifyPassword };

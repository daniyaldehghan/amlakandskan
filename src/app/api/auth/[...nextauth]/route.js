import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import ConnectDB from "@/utils/connectDB";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await ConnectDB();
        } catch (err) {
          throw new Error("مشکلی در سرور رخ داده است.");
        }
        if (!email || !password) {
          throw new Error("ایمیل یا پسورد را وارد کنید.");
        }
        const user = await User.findOne({ email });
        if (!user) throw new Error("ابتدا حساب کاربری ایجاد کنید.");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا پسورد معتبر وارد کنید.");
        return { email };
      },
    }),
  ],
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };

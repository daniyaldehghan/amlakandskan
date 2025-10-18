import "./globals.css";
import Layout from "../components/layout/Layout";
import { yekan } from "@/utils/fonts";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "مشاوره | املاک",
  // icons: { icon: "./favicon.ico" },
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}

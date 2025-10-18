"use client";
import { useState } from "react";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/module/Loader";

function SigninPage() {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const signinHandler = async (e) => {
    e.preventDefault();
    isLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    isLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
      <form>
        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>رمز عبور:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signinHandler}>
            ورود
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;

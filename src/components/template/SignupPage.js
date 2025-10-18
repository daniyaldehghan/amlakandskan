"use client";
import { useState } from "react";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { DotLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import Loader from "@/module/Loader";

function SignupPage() {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const router = useRouter();
  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== repassword) {
      toast.error("رمز وتکرار آن برابر نیست!");
    }
    isLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    isLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
      return;
    }
  };
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
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
        <label>تکرار رمز عبور:</label>
        <input
          type="password"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;

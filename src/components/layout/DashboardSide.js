import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/layout/DashboardSide.module.css";
import LogoutButton from "@/module/LogoutButton";
import Search from "@/module/search";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

async function DashboardSide({ children, role, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? "ادمین" : null}
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profile">آگهی های من</Link>
        <Link href="/dashboard/add-profile"> ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">درانتظار انتشار</Link> : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSide;

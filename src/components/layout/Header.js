"use client";
import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  const { data } = useSession();
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-reside">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signup">
            <HiOutlineLogin />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

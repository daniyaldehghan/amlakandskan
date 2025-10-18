"use client";
import styles from "@/module/ShareButton.module.css";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button onClick={() => toast.success("لینک آگهی باموفقیت کپی شد")}>
          اشتراک گذاری
        </button>
        <Toaster />
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;

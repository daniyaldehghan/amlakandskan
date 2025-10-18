"use client";
import styles from "@/module/AdminCard.module.css";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();
  const publishedHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishedHandler}>انتشار</button>
      <button style={{ background: "red" }} onClick={deleteHandler}>
        عدم انتشار
      </button>
      <Toaster />
    </div>
  );
}

export default AdminCard;

import styles from "@/template/DashboardPage.module.css";
import { now } from "next-auth/client/_utils";

async function DashboardPage({ createdAt }) {
  return (
    <div className={styles.container}>
      <h3> سلام👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند!</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{new Date(createdAt).toLocaleDateString("fa")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;

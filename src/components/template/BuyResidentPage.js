import Card from "@/module/Card";
import SideBar from "@/module/SideBar";
import styles from "@/template/BuyResidentPage.module.css";

function BuyResidentPage({ data }) {
  
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar data={data} />
      </div>
      <div className={styles.main}>
        {data.length ? null : <p className={styles.text}>آگهی ثبت نشده است</p>}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentPage;

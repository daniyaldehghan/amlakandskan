import styles from "@/module/SideBar.module.css";
import Link from "next/link";

function SideBar() {
  const queryies = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { office: "دفتر" },
    { store: "مغازه" },
  ];
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <Link href="/buy-reside">همه</Link>
      {queryies.map((query, inedx) => (
        <Link
          key={inedx}
          href={{
            pathname: "/buy-reside",
            query: { category: Object.keys(query) },
          }}
        >
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;

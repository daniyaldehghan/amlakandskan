import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import styles from "@/template/HomePage.module.css";
import CategoryCard from "@/module/CategoryCard";
import Animations from "@/module/Animations";

function HomePage() {
  const servises = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];
  return (
    <div className={styles.banner}>
      <div className={styles.desc}>
        <Animations />
        <ul>
          {servises.map((i) => (
            <li key={i}>
              <FiCircle />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <div className={styles.categories}>
          <CategoryCard name="villa" title="خانه ویلایی" />
          <CategoryCard name="apartment" title="خانه آپارتمانی" />
          <CategoryCard name="store" title="فروشگاه" />
          <CategoryCard name="office" title="دفتر کار" />
        </div>
        <div className={styles.city}>
          <h3>شهر های پر بازدید</h3>
          <ul>
            {cities.map((i) => (
              <li key={i}>
                <FaCity />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

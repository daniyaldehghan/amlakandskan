import Image from "next/image";
import Link from "next/link";
import styles from "@/module/CategoryCard.module.css";

function CategoryCard({ name, title }) {
  return (
    <div className={styles.card}>
      <Link href={`/buy-reside?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={140}
          priority
        />
      </Link>
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;

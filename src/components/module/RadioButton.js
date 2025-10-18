import styles from "@/module/RadioButton.module.css";

function RadioButton({ profileData, setProfileData }) {
  const { category } = profileData;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی </p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            value="villa"
            name="category"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            value="apartment"
            name="category"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            value="store"
            name="category"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            value="office"
            name="category"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioButton;

import styles from "@/module/TextData.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function TextDate({ profileData, setProfileData }) {
  const { constructionDate } = profileData;
  const changHandler = (e) => {
    const deta = new Date(e);
    setProfileData({ ...profileData, constructionDate: deta });
  };
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت:</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={changHandler}
        value={constructionDate}
      />
    </div>
  );
}

export default TextDate;

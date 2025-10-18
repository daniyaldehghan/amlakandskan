"use client";
import RadioButton from "@/module/RadioButton";
import TextDate from "@/module/TextDate";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/AddProfile.module.css";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AddProfile({ data }) {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);
  const editHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  const SubmitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("آگهی به صف انتشار اضافه شد.");
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        type="text"
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تلفن"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioButton profileData={profileData} setProfileData={setProfileData} />

      <TextList
        title="amenities"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />

      <TextList
        title="rules"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <TextDate profileData={profileData} setProfileData={setProfileData} />
      <Toaster />
      {data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={SubmitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfile;

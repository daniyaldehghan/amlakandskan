import Profile from "@/models/Profile";
import BuyResidentPage from "@/template/BuyResidentPage";
import ConnectDB from "@/utils/connectDB";
import React from "react";

async function page({ searchParams }) {
  const resolvedParams = await searchParams;
  // const res = await fetch("http://localhost:3000/api/profile", {
  //   cache: "no-store",
  // });
  // const data = await res.json();
  await ConnectDB();
  const profiles = await Profile.find({ published: true });
  console.log(profiles);
  if (profiles.error) return <h3>مشکلی پیش آمده است</h3>;
  let finalData = profiles;
  if (resolvedParams.category) {
    finalData = finalData.filter((i) => i.category === resolvedParams.category);
  }
  return <BuyResidentPage data={finalData} />;
}

export default page;

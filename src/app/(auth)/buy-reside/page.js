import BuyResidentPage from "@/template/BuyResidentPage";
import React from "react";

async function page({ searchParams }) {
  const resolvedParams = await searchParams;
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  if (data.error) return <h3>مشکلی پیش آمده است</h3>;
  let finalData = data.data;
  if (resolvedParams.category) {
    finalData = finalData.filter((i) => i.category === resolvedParams.category);
  }
  return <BuyResidentPage data={finalData} />;
}

export default page;

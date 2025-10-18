import DashboardCard from "@/module/DashboardCard";
import React from "react";

function MyProfilePage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی ثبت نشده</p>}

      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilePage;

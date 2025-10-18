import DashboardSide from "@/layout/DashboardSide";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import AdminPage from "@/module/AdminPage";
import Profile from "@/models/Profile";
export const metadata = {
  title: " پنل ادمین مشاوره | املاک",
};
async function page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");
  const profiles = await Profile.find({ published: false });
  return (
    <DashboardSide role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSide>
  );
}

export default page;

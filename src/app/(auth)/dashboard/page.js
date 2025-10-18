import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import DashboardPage from "@/template/DashboardPage";
import ConnectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";

async function Dashboard() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  return (
    <div>
      <DashboardPage createdAt={user.createdAt} />
    </div>
  );
}

export default Dashboard;

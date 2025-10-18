import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardSide from "@/layout/DashboardSide";
import User from "@/models/User";
import ConnectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: " پنل کاربری مشاوره | املاک",
};
async function Dashboardlayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  await ConnectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی پیش آمده است</h3>;
  return (
    <DashboardSide role={user.role} email={user.email}>
      {children}
    </DashboardSide>
  );
}

export default Dashboardlayout;

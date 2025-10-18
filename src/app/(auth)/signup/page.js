import SignupPage from "@/template/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div>
      <SignupPage />
    </div>
  );
}

export default Signup;

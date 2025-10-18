import Profile from "@/models/Profile";
import User from "@/models/User";
import ConnectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await ConnectDB();
    const id = context.params.profileId;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 401 });
    }
    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    profile.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت انتشار شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "خطایی در سررور رخ داده است!" },
      { status: 500 }
    );
  }
}

import Profile from "@/models/Profile";
import User from "@/models/User";
import ConnectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await ConnectDB();
    const id = context.params.profileId;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "ابتدا به حساب کاربری وارد شورید " });
    }
    const user = await User.findOne({ email: session.user.email });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب با این نام کاربری یافت نشد" },
        { status: 401 }
      );
    }
    const profile = await Profile.findOne({ _id: id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }
    await Profile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی با موفقیت حذف شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "خطایی در سررور رخ داده است!" },
      { status: 500 }
    );
  }
}

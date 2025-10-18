import User from "@/models/User";
import { hashdPassword } from "@/utils/auth";
import ConnectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();

    const { email, password } = await req.json();
    console.log({ email, password });

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });
    console.log(existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashdPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    );
  }
}

import Profile from "@/models/Profile";
import DetalesPage from "@/template/DetalesPage";
import ConnectDB from "@/utils/connectDB";
import React from "react";

async function ProfileDetailes({ params }) {
  const { profileId } = await params;
  await ConnectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش آمده است!</h3>;
  return <DetalesPage data={JSON.parse(JSON.stringify(profile))} />;
}

export default ProfileDetailes;
export const generateMetadata = async ({ params: { profileId } }) => {
  await ConnectDB();
  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
    authors: { name: profile.realState },
    other: { mytag: "test meta tag" },
  };
};

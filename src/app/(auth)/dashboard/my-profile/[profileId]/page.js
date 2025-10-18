import Profile from "@/models/Profile";
import AddProfile from "@/template/AddProfile";

async function Edit({ params }) {
  const { profileId } = await params;
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>دوباره امتحان کنید</h3>;

  return <AddProfile data={JSON.parse(JSON.stringify(profile))} />;
}

export default Edit;

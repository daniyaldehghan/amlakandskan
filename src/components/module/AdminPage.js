import Profile from "@/models/Profile";
import AdminCard from "./AdminCard";

async function AdminPage({ profiles }) {

  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی ثبت نشده</p>}

      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;

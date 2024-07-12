import AdminNavbar from "../AdminNavbar";
import AdminTable from "./AdminTable";

const AdminDashboard = () => {
  return (
    <div>
      <div className="">
        <div className="flex">
          {/* Dashboard sidebar */}
          <div className="w-64 min-h-screen bg-orange-300">
            <ul className="menu p-4 space-y-4">
              <AdminNavbar />
            </ul>
          </div>

          <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

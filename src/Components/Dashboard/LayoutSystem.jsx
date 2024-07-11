import { NavLink } from "react-router-dom";
import Table from "../UserDashboard/Table";
import UserNavbar from "../UserNavbars/UserNavbar";
import AdminNavbar from "../AdminNavbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex">
        {/* Dashboard sidebar */}
        <div className="w-64 min-h-screen bg-orange-300">
          <ul className="menu p-4 space-y-4">
            {user && user.role === "admin" ? <AdminNavbar /> : <UserNavbar />}
          </ul>
        </div>

        <div className="flex-1 p-8 mt-12">
          <Table />
        </div>
        <div className="btn bg-orange-400 hover:bg-orange-600">
          <NavLink to="/scanCode">Tap to Scan QR code</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

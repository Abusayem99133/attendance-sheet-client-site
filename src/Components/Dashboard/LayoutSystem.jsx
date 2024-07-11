import { Link, NavLink } from "react-router-dom";
import Table from "../UserDashboard/Table";
import UserNavbar from "../UserNavbars/UserNavbar";
import AdminNavbar from "../AdminNavbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import scanners from "../../assets/qr-code-bc94057f452f4806af70fd34540f72ad.png";

const LayoutSystem = () => {
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
          <img className="w-[40%] mx-auto" src={scanners} alt="Scanner" />
          <div className="btn  hover:bg-orange-600 bg-orange-300  flex">
            <Link to="/qrScan">Tap to Scan QR code</Link>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default LayoutSystem;

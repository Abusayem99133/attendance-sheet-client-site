import { Link } from "react-router-dom";
import UserNavbar from "../../UserNavbars/UserNavbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import scanners from "../../../assets/pngtree-mobile-phone-scan-code-sweeping-pattern-design-png-image_4429148.jpg";
import Table from "./UserDashboard/Table";

const LayoutSystem = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex">
        {/* Dashboard sidebar */}
        <div className="w-64 min-h-screen bg-orange-300">
          <ul className="menu p-4 space-y-4">
            <UserNavbar />
          </ul>
        </div>

        <div className="flex-1 p-8 mt-12">
          <Link to="/qrScan">
            <img className="w-[20%] mx-auto" src={scanners} alt="Scanner" />
          </Link>

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

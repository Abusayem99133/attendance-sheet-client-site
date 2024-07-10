import { NavLink } from "react-router-dom";
import Table from "../UserDashboard/Table";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex">
        {/* dashboard site bar */}
        <div className="w-64 min-h-screen bg-orange-300">
          <ul className="menu p-4 space-y-4">
            <li>
              <NavLink>UserProfile</NavLink>
            </li>
            <li>
              <NavLink>User History</NavLink>
            </li>
            <li>
              <NavLink>Admin History</NavLink>
            </li>
            <li>
              <NavLink>Admin History</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-8 mt-12">
          <Table />
        </div>
        <div className=" btn bg-orange-400 hover:bg-orange-600">
          <NavLink to="/scanCode">Tap to Scan QR code</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <div className="space-y-4">
        <li>
          <Link>Admin Profile</Link>
        </li>
        <li>
          <Link>Admin History</Link>
        </li>
        <li>
          <Link>QR Code</Link>
        </li>
      </div>
    </div>
  );
};

export default AdminNavbar;

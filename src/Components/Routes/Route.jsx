import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";

import Table from "../UserDashboard/Table";
import Login from "../Authenticaiton/Login/Login";
import Register from "../Authenticaiton/Register/Register";
import AdminLogin from "../Authenticaiton/AdminLoginSystem/AdminLogin";
import AdminRegister from "../Authenticaiton/AdminRegister/AdminRegister";
import LayoutSystem from "../Dashboard/LayoutSystem";
import PrivateRoute from "../Authenticaiton/Private/PrivateRoute";
import ScannerCode from "../ScannerSystem/ScannerCode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <LayoutSystem />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/adminLogins",
        element: <AdminLogin />,
      },
      {
        path: "/adminRegisters",
        element: <AdminRegister />,
      },
      {
        path: "/qrScan",
        element: <ScannerCode />,
      },
    ],
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

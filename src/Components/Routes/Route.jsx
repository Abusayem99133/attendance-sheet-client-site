import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";

import Table from "../Pages/Dashboard/UserDashboard/Table";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminLogin from "../Pages/AdminLoginSystem/AdminLogin";
import AdminRegister from "../Pages/AdminRegister/AdminRegister";
import LayoutSystem from "../Pages/Dashboard/LayoutSystem";
import PrivateRoute from "../Pages/Private/PrivateRoute";
import ScannerCode from "../Pages/ScannerSystem/ScannerCode";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";

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
      {
        path: "/adminDashboards",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";

import Table from "../UserDashboard/Table";
import Navbar from "../Dashboard/LayoutSystem";
import Login from "../Authenticaiton/Login/Login";
import Register from "../Authenticaiton/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navbar />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

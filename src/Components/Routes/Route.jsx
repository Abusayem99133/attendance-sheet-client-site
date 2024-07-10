import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Login from "../Login/Login";

import Table from "../UserDashboard/Table";
import Navbar from "../Dashboard/Navbar";

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
    ],
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

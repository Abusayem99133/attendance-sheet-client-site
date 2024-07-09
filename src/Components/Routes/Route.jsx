import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import UserProfile from "../Dashboard/UserProfile";
import UserDashboard from "../Dashboard/UserDashboard";
import UserHistory from "../Dashboard/UserHistory";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <UserDashboard />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/userHistory",
        element: <UserHistory />,
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
]);

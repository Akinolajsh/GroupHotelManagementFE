import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import UserRegister from "../pages/Screen/userAuth/UserRegister";
import UserSignIn from "../pages/Screen/userAuth/UserSignIn";
import HomeScreen from "../pages/Screen/LandingPage/HomeScreen";
import Description from "../pages/Screen/LandingPage/Description";
import CreateRoom from "../pages/Admin/CreateRoom";
import ViewRooms from "../pages/Screen/LandingPage/ViewRooms";
import AdminRegister from "../pages/Admin/Auth/AdminRegister";
import AdminSignIn from "../pages/Admin/Auth/AdminSignIn";
import PrivateRoute from "./PrivateRoute";
import ViewAllRooms from "../pages/Screen/LandingPage/ViewAllRooms";
import AdminLayout from "../components/common/adminLayout/AdminLayout";
import Dashbord from "../components/common/adminLayout/Dashbord";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/user-register",
    element: <UserRegister />,
  },
  {
    path: "/user-sign-in",
    element: <UserSignIn />,
  },
  {
    path: "/description",
    element: <Description />,
  },
  {
    path: "/admin-create",
    element: <CreateRoom />,
  },
  {
    path: "/view-rooms",
    element: <ViewRooms />,
  },
  {
    path: "/admin-register",
    element: <AdminRegister />,
  },
  {
    path: "/admin-sign-in",
    element: <AdminSignIn />,
  },

  {
    path: "/all-rooms",
    element: <ViewAllRooms />,
  },
  {
    path: "/admin",
    element: (
        <AdminLayout />
    ),
    children: [
      {
        index: true,
        element: <Dashbord />,
      },
    ],
  },
]);

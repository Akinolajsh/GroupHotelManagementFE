import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import UserRegister from "../pages/Screen/userAuth/UserRegister";
import UserSignIn from "../pages/Screen/userAuth/UserSignIn";
import HomeScreen from "../pages/Screen/LandingPage/HomeScreen";
import Description from "../pages/Screen/LandingPage/Description";
import CreateRoom from "../pages/Admin/CreateRoom";
import ViewRooms from "../pages/Screen/LandingPage/ViewRooms";
import Dashbord from "../pages/Admin/Dashbord";
import AdminRegister from "../pages/Admin/Auth/AdminRegister";

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
    path: "/admin-dashboard",
    element: <Dashbord />,
  },
  {
    path: "/admin-register",
    element: <AdminRegister />,
  },
]);

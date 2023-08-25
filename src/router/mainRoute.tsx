import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import UserRegister from "../pages/Screen/userAuth/UserRegister";
import UserSignIn from "../pages/Screen/userAuth/UserSignIn";
import HomeScreen from "../pages/Screen/LandingPage/HomeScreen";
import Description from "../pages/Screen/LandingPage/Description";
import CreateRoom from "../pages/Admin/Auth/CreateRoom";
import ViewRooms from "../pages/Screen/LandingPage/ViewRooms";
import AdminRegister from "../pages/Admin/Auth/AdminRegister";
import AdminSignIn from "../pages/Admin/Auth/AdminSignIn";
import ViewAllRooms from "../pages/Screen/LandingPage/ViewAllRooms";
import AdminLayout from "../components/common/adminLayout/AdminLayout";
import Dashbord from "../components/common/adminLayout/Dashbord";
import Registration from "../pages/Screen/LandingPage/Registration";
import AdminViewRoom from "../pages/Screen/LandingPage/AdminViewRoom";
import BookRooms from "../pages/Screen/LandingPage/BookRooms";
import PrivateRoute from "./PrivateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
        <Layout />
      // </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/all-rooms",
        element: <ViewAllRooms />,
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
    path: "/admin",
    element: <PrivateRoute>
 <AdminLayout />
    </PrivateRoute>,
    
    children: [
      {
        index: true,
        element: <Dashbord />,
      },
      {
        index: true,
        path: "/admin/create",
        element: <CreateRoom />,
      },
      {
        index: true,
        path: "/admin/view",
        element: <AdminViewRoom />,
      },
      {
        index: true,
        path: "/admin/book",
        element: <BookRooms />,
      },
    ],
  },
  {
    path: "/general",
    element: <Registration />,
  },
]);

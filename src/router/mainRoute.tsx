import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import UserRegister from "../pages/Screen/userAuth/UserRegister";
import UserSignIn from "../pages/Screen/userAuth/UserSignIn";
import HomeScreen from "../pages/Screen/LandingPage/HomeScreen";
import Description from "../pages/Screen/LandingPage/Description";
import CreateRoom from "../pages/Admin/CreateRoom";
import ViewRooms from "../pages/Screen/LandingPage/ViewRooms";
import AdminRegister from "../pages/Admin/Auth/AdminRegister";
import AdminSignIn from "../pages/Admin/Auth/AminSignIn";
import PrivateRoute from "./PrivateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <HomeScreen />
          </PrivateRoute>
        ),
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
]);

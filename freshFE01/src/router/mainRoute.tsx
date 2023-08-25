import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import InputScreen from "../pages/Screen/InputScreen";
import Facebook from "../pages/Screen/Facebook";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
        index:true,
        element:<InputScreen/>
    }],
  },{
    path: "/facebook",
    element: <Facebook/>
  }
]);

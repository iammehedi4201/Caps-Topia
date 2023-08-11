import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUP/SignUp";
import Products from "../Pages/Products/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

// eslint-disable-next-line no-unused-vars
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
         path:"/login",
         element:<LogIn></LogIn>
      },
      {
         path:"/signup",
         element:<SignUp></SignUp>
      },
      {
        path :"/products",
        element:<Products></Products>
      },
      {
        path:'/productDetails',
        element:<ProductDetails></ProductDetails>
      }

    ],
  },
]);

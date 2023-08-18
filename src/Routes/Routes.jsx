/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUP/SignUp";
import Products from "../Pages/Products/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/ShoppingCart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Error from "../Pages/Error/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";

// eslint-disable-next-line no-unused-vars
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
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
        element:<PrivateRoute><Products></Products></PrivateRoute>
      },
      {
        path:'/productDetails/:carId',
        element:<ProductDetails></ProductDetails>,
        loader:({params})=>{
               const Id = params.carId
               return fetch(`http://localhost:4000/capsData/${Id}`)
        }
      },
      {
        path :"/cart",
        element:<Cart></Cart>
      },
      {
        path :"/checkout",
        element:<Checkout></Checkout>
      },
      {
        path:"/aboutus",
        element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      }


    ]
  },
  {
    path:"*",
    element:<Error></Error>
  }
]);

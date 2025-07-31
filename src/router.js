import { createBrowserRouter } from "react-router";
import App from "./App";
import Products from "./Products";
import Cartproduct from "./ProductCard";
import Productdetails from "./Productdetails"
// import Cart from "./Cart"
import Cart from "./Cart"
import Dashboard from "./Dashboard";
//import Profile from "./Account";//
//import Settings from "./Control";//
import Account from "./Account";
import Control from "./Control";

const router = createBrowserRouter([
   {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <Productdetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "account",    
        element: <Account />
      },
      {
        path: "control",    
        element: <Control />
      },
    ],
  },
]);




export default router;
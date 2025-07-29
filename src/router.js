import { createBrowserRouter } from "react-router";
import App from "./App";
import Products from "./Products";
import Cartproduct from "./ProductCard";
import Productdetails from "./Productdetails"
import Dashboard from "./Dashboard";
import Profile from "./Account";
import Settings from "./Control";

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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",    
        element: <Profile />,
      },
      {
        path: "settings",    
        element: <Settings />,
      },
    ],
  },
]);




export default router;
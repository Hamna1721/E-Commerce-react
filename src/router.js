import { createBrowserRouter } from "react-router";
import App from "./App";
import Products from "./Products";
import Productsdetails from "./Productsdetails";

const router = createBrowserRouter([
   {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Productsdetails />,
  }
]);

export default router;
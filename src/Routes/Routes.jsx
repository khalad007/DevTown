import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AvailablePhone from "../Pages/Home/AvailablePhone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availablePhone",
        element: <AvailablePhone></AvailablePhone>
      }
    ],
  },
 
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import PortfolioLayout from "../layout/PortfolioLayout";
import HomePage from "../pages/HomePage";
import Restaurent from "../works/Restaurent";


const router = createBrowserRouter([

    {
        path: "/",
        element:<PortfolioLayout />,
        children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
                path: "/restaurent",
                element: <Restaurent />,
              },
          ],
    },
]);

export default router;
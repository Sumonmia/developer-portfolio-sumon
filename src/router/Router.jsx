import { createBrowserRouter } from "react-router-dom";
import PortfolioLayout from "../layout/PortfolioLayout";
import AboutMe from "../components/AboutMe";
import HomePage from "../pages/HomePage";


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
                path: "/aboutme",
                element: <AboutMe />,
              },
          ],
    },
]);

export default router;
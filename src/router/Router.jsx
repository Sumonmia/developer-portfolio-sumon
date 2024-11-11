import { createBrowserRouter } from "react-router-dom";
import PortfolioLayout from "../layout/PortfolioLayout";
import HomePage from "../pages/HomePage";
import Restaurent from "../works/Restaurent";
import LearnSphere from "../works/LearnSphere";
import BookShelf from "../works/BookShelf";
import MetroMovers from "../works/MetroMovers";


const router = createBrowserRouter([

  {
    path: "/",
    element: <PortfolioLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/restaurent",
        element: <Restaurent />,
      },
      {
        path: "/learnsphere",
        element: <LearnSphere />,
      },
      {
        path: "/bookshelf",
        element: <BookShelf />,
      },
      {
        path: "/metromovers",
        element: <MetroMovers />,
      },
    ],
  },
]);

export default router;
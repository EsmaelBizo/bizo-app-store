import HomePage from "../pages/home-page/home-page.jsx";
import ProductsPage from "../pages/products-page/products-page.jsx";
import AboutPage from "../pages/about-page/about-page.jsx";
import AddPage from "../pages/add-page/add-page.jsx";
import UpdatePage from "../pages/update-page/update-page.jsx";
import NotFoundPage from "../pages/not-found-page/not-found-page.jsx";

const appRoutes = {
  home: {
    path: "/",
    element: <HomePage />,
  },
  products: {
    path: "/products",
    element: <ProductsPage />,
  },
  add: {
    path: "/add",
    element: <AddPage />,
  },
  update: {
    path: "/edit/:id",
    element: <UpdatePage />,
  },
  about: {
    path: "/about",
    element: <AboutPage />,
  },
  notFound: {
    path: "/*",
    element: <NotFoundPage />,
  },
};

export default appRoutes;

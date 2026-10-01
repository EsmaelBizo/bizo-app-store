import "./app.css";
import { Route, Routes } from "react-router";
import StoreLayout from "../layouts/store-layout.jsx";
import appRoutes from "./app-routes.jsx";

function App() {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        {Object.values(appRoutes).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

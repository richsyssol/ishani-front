import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import FactoryOutletPage from "./pages/FactoryOutlet/FactoryOutlet";
import FranchiseOpportunity from "./pages/Franchise/FranchiseOpportunity";
import PageNotFound from "./pages/ErrorPages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/factory-outlet" element={<FactoryOutletPage />} />
        <Route path="/ishani-franchise" element={<FranchiseOpportunity />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

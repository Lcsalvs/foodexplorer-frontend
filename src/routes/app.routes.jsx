import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { HomeAdmin } from "../pages/HomeAdmin";
import { New } from "../pages/New";
import { Cart } from "../pages/Cart";
import { Product } from "../pages/Product";
import AdminLayout from "../components/Layout/AdminLayout";
import PublicLayout from "../components/Layout/PublicLayout";

export function AppRoutes() {
  return (
    <Routes>
      {/* Publico */}
      <Route path="/" exact element={<PublicLayout Component={Home} />} />
      <Route path="/cart/:id" element={<PublicLayout Component={Cart} />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout Component={HomeAdmin} />} />
      <Route path="/new" exact element={<AdminLayout Component={New} />} />
      <Route path="/edit/:id" exact element={<AdminLayout Component={New} />} />
      {/* <Route path="/edit/:id" element={<AdminLayout Component={Edit} />} /> */}
      <Route
        path="/product/:id"
        element={<AdminLayout Component={Product} />}
      />
    </Routes>
  );
}

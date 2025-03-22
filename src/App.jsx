import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductosPage from "./pages/InventoryPage";
import SupplierPage from "./pages/SupplierPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/AdminLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública sin layout */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rutas administrativas con layout */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/inventario" element={<ProductosPage />} />
          <Route path="/proveedores" element={<SupplierPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
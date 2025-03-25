import React, { useEffect, useState } from "react";
import { getInventario } from "../services/dashboard/inventarioService";
import ProductTable from "../components/product/ProductTable";

const ProductPage = () => {
  const [inventario, setInventario] = useState([]); // Aquí definimos el estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inventarioApi = await getInventario();
        console.log("Datos recibidos de la API:", inventarioApi);
        setInventario(inventarioApi);
      } catch (error) {
        console.error("Error al obtener inventario:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductTable inventarioList={inventario} />
    </>
  );
};

export default ProductPage;

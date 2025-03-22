import React, { useEffect, useState } from "react";
import ProductList from "../components/product/ProductList"; // Asegúrate de que el nombre del componente es correcto
import { getInventario } from "../services/dashboard/inventarioService";

const ProductPage = () => {
  const [inventario, setInventario] = useState([]); // Aquí definimos el estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inventarioApi = await getInventario();
        console.log("Datos recibidos de la API:", inventarioApi);
        setInventario(inventarioApi); // Asignamos los datos al estado
      } catch (error) {
        console.error("Error al obtener inventario:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductList inventario={inventario} onEdit={() => {}} onDelete={() => {}} />
    </>
  );
};

export default ProductPage;

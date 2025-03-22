import React, { useEffect, useState } from 'react'
import Dashboard from '../components/dashboard/dashboard';
import { getIngresosDelAnio, getStockPorMarca, getTotalBajoStock, getTotalInversion, getTotalProveedores, getTotalZapatos } from '../services/dashboard/dashboardService';

const DashboardPage = () => {

  const [calculos, setCalculos] = useState({
    bajoStock: 0,
    totalProveedor: 0,
    totalZapatos: 0,
    totalInversion: 0
  })

  const [stockPorMarca, setStockPorMarca] = useState([])
  const [ingresosDelAnio, setIngresosDelAnio] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalInversion = await getTotalInversion();
        const totalStock = await getTotalBajoStock();
        const totalProveedores = await getTotalProveedores();
        const totalZapatos = await getTotalZapatos();

        const stockPorMarcaApi = await getStockPorMarca();
        const { data } = await getIngresosDelAnio();;

        const formattedData = data.map(dto => ({
          month: dto.mes,
          nike: dto.marcas.Nike,
          adidas: dto.marcas.Adidas
        }));

        setCalculos({
          bajoStock: totalStock,
          totalProveedor: totalProveedores,
          totalZapatos: totalZapatos,
          totalInversion: totalInversion
        });

        setStockPorMarca(stockPorMarcaApi)
        setIngresosDelAnio(formattedData)

      } catch (error) {
        console.error("Error al obtener los cálculos:", error);
      }
    };

    fetchData();
  }, [])


  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    stock: Math.floor(Math.random() * 100),
    image: `https://imgs.search.brave.com/_toqT8IRn1TgcZsWaLmUIyGozfTFh2vCNwcyEiZ3NAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExdjJwUFZIS0wu/anBn`
  }));

  return (
    <Dashboard 
      products={products} calculos={calculos} stockPorMarca={stockPorMarca}
      ingresosDelAnio={ingresosDelAnio}
    />
  );
};

export default DashboardPage
import React, { useEffect, useState } from 'react'
import Dashboard from '../components/dashboard/dashboard';
import { getIngresoRecientes, getIngresosDelAnio, getStockPorMarca, getTotalBajoStock, getTotalInversion, getTotalProveedores, getTotalZapatos } from '../services/dashboard/dashboardService';

const DashboardPage = () => {

  const [calculos, setCalculos] = useState({
    bajoStock: 0,
    totalProveedor: 0,
    totalZapatos: 0,
    totalInversion: 0
  })

  const [stockPorMarca, setStockPorMarca] = useState([])
  const [ingresosDelAnio, setIngresosDelAnio] = useState([])
  const [ingresosRecientes, setIngresosRecientes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalInversion = await getTotalInversion();
        const totalStock = await getTotalBajoStock();
        const totalProveedores = await getTotalProveedores();
        const totalZapatos = await getTotalZapatos();

        const stockPorMarcaApi = await getStockPorMarca();
        const ingresosRecientesApi = await getIngresoRecientes();
        const { data } = await getIngresosDelAnio();;

        const formattedData = data.map(dto => ({
          month: dto.mes,
          nike: dto.marcas.Nike,
          adidas: dto.marcas.Adidas,
          rebook: dto.marcas.Rebook
        }));

        setCalculos({
          bajoStock: totalStock,
          totalProveedor: totalProveedores,
          totalZapatos: totalZapatos,
          totalInversion: totalInversion
        });

        setStockPorMarca(stockPorMarcaApi)
        setIngresosDelAnio(formattedData)
        setIngresosRecientes(ingresosRecientesApi)
      } catch (error) {
        console.error("Error al obtener los cálculos:", error);
      }
    };

    fetchData();
  }, [])


  return (
    <Dashboard 
     calculos={calculos} stockPorMarca={stockPorMarca}
      ingresosDelAnio={ingresosDelAnio} ingresosRecientes={ingresosRecientes}
    />
  );
};

export default DashboardPage
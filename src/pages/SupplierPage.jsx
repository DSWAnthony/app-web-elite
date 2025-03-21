import React, { useEffect, useState } from 'react'
import SupplierTable from '../components/Supplier/SupplierTable'
import { getProveedores } from '../services/dashboard/supplierServices';

const SupplierPage = () => {
  const [proveedores, setProveedores] = useState([]); // Aquí definimos el estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proveedoresApi = await getProveedores();
        console.log("Datos recibidos de la API:", proveedoresApi);
        setProveedores(proveedoresApi); // Asignamos los datos al estado
      } catch (error) {
        console.error("Error al obtener proveedores:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <h1>Pagina de Proveedores</h1>
    <SupplierTable proveedores={proveedores}/>
    </>
  )
}

export default SupplierPage

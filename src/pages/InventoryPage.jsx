import React, { useEffect } from 'react'
import ProductTable from '../components/product/ProductTable'
import { getInventario } from '../services/dashboard/inventarioService'

const ProductPage = () => {
  

  useEffect(() => {

    const fetchData = async () => {
      const inventario = await getInventario();
    }

    fetchData();

  }, [])
  

  return (    
    <>
      <ProductTable></ProductTable>
    </>
  )
}

export default ProductPage
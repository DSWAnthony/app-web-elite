import { useState } from 'react';
import { deleteInventario, editarAInventario, guardarAInventario } from '../services/dashboard/inventarioService';

export const useProductInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, first: "Nike Air Max", last: "Negro/Blanco", handle: "40" },
    { id: 2, first: "Adidas Superstar", last: "Blanco", handle: "42" },
    { id: 3, first: "Reebok Classic", last: "Gris/Rojo", handle: "39" },
  ]);
  const [modalType, setModalType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const saveProduct = async (formData, imagen, form) => {
    form.setLoading(true);
    try {
      if (!form.validateForm()) {
        form.setLoading(false);
        return false;
      }
      
      if (modalType === "Agregar") {
        // Preparar el objeto final para enviar
        const productData = { ...formData };
        
        // Agregar fecha actual si no está definida
        if (!productData.ingreso.fecha_ingreso) {
          const today = new Date();
          productData.ingreso.fecha_ingreso = today.toISOString().split('T')[0];
        }
        
        // Enviar datos a la API
        const result = await guardarAInventario(productData, imagen);
        console.log("Producto guardado:", result);
        
        // Actualizar la lista de productos (para la vista)
        const newProduct = {
          id: products.length + 1,
          first: productData.zapato.modelo.nombre,
          last: productData.zapato.color,
          handle: `${productData.zapato.talla}`
        };
        setProducts([...products, newProduct]);
        
      } else if (modalType === "Editar") {
        const result = await editarAInventario(formData, imagen);
  
        setProducts(products.map(p => 
          p.detalle_id === formData.detalle_id ? {
            ...p,
            inventario_id: formData.inventario_id,
            modelo: formData.zapato.modelo.nombre,
            color: formData.zapato.color,
            talla: formData.zapato.talla,
            stock: formData.cantidad,
            imagen: formData.zapato.urlImagen,
            precio_comercial: formData.zapato.precioComercial,
            precio_compra: formData.precio_compra
          } : p
        ));
      }
      
      // Cerrar modal
      setModalType("");
      form.setLoading(false);
      return true;
      
    } catch (error) {
      console.error("Error al guardar el producto:", error);
      form.setErrorMessage("Error al guardar el producto. Intente nuevamente.");
      form.setLoading(false);
      return false;
    }
  };

  const deleteProduct = async () => {
    await deleteInventario(selectedProduct.detalle_id)
    setModalType("");
  };

  const openAddModal = (resetForm) => {
    setModalType("Agregar");
    resetForm();
  };

  const openEditModal = (product, populateForm) => {
    setModalType("Editar");
    populateForm(product);
  };

  const openDeleteModal = (product) => {
    setModalType("Eliminar");
    setSelectedProduct(product);
  };

  return {
    products,
    modalType,
    selectedProduct,
    setProducts,
    setModalType,
    saveProduct,
    deleteProduct,
    openAddModal,
    openEditModal,
    openDeleteModal
  };
};
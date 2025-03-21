import { useState } from 'react';

export const useProductForm = () => {
  const initialFormState = {
    ingreso: {
      proveedor_id: 1,
      orden_compra: "CP-008",
      fecha_ingreso: new Date().toISOString().split('T')[0]
    },
    zapato: {
      modelo: {
        nombre: "",
        genero: "",
        categoria: {
          id: 1
        },
        marca: {
          id: 1
        }
      },
      talla: 0,
      color: "",
      sku: "AD-09-SD",
      precioComercial: 0
    },
    almacen: {
      almacen_id: 1
    },
    cantidad: 0,
    precio_compra: 0
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showOptions, setShowOptions] = useState({
    agregarMarca: false,
    agregarCategoria: false,
    asignarAlmacen: false
  });
  const [imagen, setImagen] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => setFormData(initialFormState);

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    setShowOptions({
      ...showOptions,
      [name]: checked,
    });
    
    // Actualizar el formData según el cambio de switch
    const updatedFormData = { ...formData };
    
    if (name === "agregarMarca") {
      updatedFormData.zapato.modelo.marca = checked 
        ? { nombre: "" } 
        : { id: 1 };
    }
    
    if (name === "agregarCategoria") {
      updatedFormData.zapato.modelo.categoria = checked 
        ? { nombre: "" } 
        : { id: 1 };
    }
    
    setFormData(updatedFormData);
  };

  const handleFileChange = (event) => {
    setImagen(event.target.files[0]);
  };

  const validateForm = () => {
    const requiredFields = [
      { field: formData.zapato.modelo.nombre, message: "El modelo es obligatorio" },
      { field: formData.zapato.modelo.genero, message: "El género es obligatorio" },
      { field: formData.zapato.talla, message: "La talla es obligatoria" },
      { field: formData.zapato.color, message: "El color es obligatorio" },
      { field: formData.cantidad, message: "El stock es obligatorio" },
      { field: formData.precio_compra, message: "El precio de compra es obligatorio" },
      { field: formData.zapato.precioComercial, message: "El precio comercial es obligatorio" },
    ];
    
    // Verificar campos requeridos básicos
    for (const { field, message } of requiredFields) {
      if (!field) {
        setErrorMessage(message);
        return false;
      }
    }
    
    // Verificar imagen para productos nuevos
    if (!imagen && formData.id === undefined) {
      setErrorMessage("La imagen es obligatoria");
      return false;
    }
    
    // Verificar opciones condicionales
    if (showOptions.agregarMarca && !formData.zapato.modelo.marca.nombre) {
      setErrorMessage("El nombre de la marca es obligatorio");
      return false;
    }
    
    if (showOptions.agregarCategoria && !formData.zapato.modelo.categoria.nombre) {
      setErrorMessage("El nombre de la categoría es obligatorio");
      return false;
    }
    
    if (showOptions.asignarAlmacen && !formData.almacen.almacen_id) {
      setErrorMessage("Debe seleccionar un almacén");
      return false;
    }
    
    setErrorMessage("");
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Clonar formData profundamente
    const updatedFormData = { ...formData };
    
    // Manejar campos basados en su nombre
    if (name === "modelo") {
      updatedFormData.zapato.modelo.nombre = value;
    } else if (name === "genero") {
      updatedFormData.zapato.modelo.genero = value;
    } else if (name === "talla") {
      updatedFormData.zapato.talla = parseFloat(value);
    } else if (name === "color") {
      updatedFormData.zapato.color = value;
    } else if (name === "stock") {
      updatedFormData.cantidad = parseInt(value);
    } else if (name === "precioCompra") {
      updatedFormData.precio_compra = parseFloat(value);
    } else if (name === "precioUnidad") {
      updatedFormData.zapato.precioComercial = parseFloat(value);
    } else if (name === "marca" && showOptions.agregarMarca) {
      updatedFormData.zapato.modelo.marca = { nombre: value };
    } else if (name === "categoria" && showOptions.agregarCategoria) {
      updatedFormData.zapato.modelo.categoria = { nombre: value };
    }
    
    setFormData(updatedFormData);
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    
    if (name === "marca_id") {
      updatedFormData.zapato.modelo.marca = { id: parseInt(value) };
    } else if (name === "categoria_id") {
      updatedFormData.zapato.modelo.categoria = { id: parseInt(value) };
    } else if (name === "proveedor_id") {
      updatedFormData.ingreso.proveedor_id = parseInt(value);
    } else if (name === "almacen_id") {
      updatedFormData.almacen.almacen_id = parseInt(value);
    }
    
    setFormData(updatedFormData);
  };

  const populateFormForEdit = (product) => {
    setFormData({
      id: product.id,
      ingreso: {
        proveedor_id: 1,
        orden_compra: "CP-005",
        fecha_ingreso: new Date().toISOString().split('T')[0]
      },
      zapato: {
        modelo: {
          nombre: product.first,
          genero: "Unisex", 
          categoria: {
            id: 1
          },
          marca: {
            id: 1
          }
        },
        talla: parseFloat(product.handle),
        color: product.last,
        sku: "AD-05-SD",
        precioComercial: 280.00
      },
      almacen: {
        almacen_id: 1
      },
      cantidad: 10,
      precio_compra: 200.00 
    });
  };

  return {
    formData,
    showOptions,
    imagen,
    errorMessage,
    loading,
    setFormData,
    setLoading,
    setErrorMessage,
    resetForm,
    handleSwitchChange,
    handleFileChange,
    validateForm,
    handleInputChange,
    handleSelectChange,
    populateFormForEdit
  };
};
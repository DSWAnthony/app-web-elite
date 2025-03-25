import { useState } from 'react';

export const useProductForm = () => {
  const generateRandomId = () => Math.floor(Math.random() * 10000);

  const randomId = generateRandomId();
  const initialFormState = {
    detalle_id: 0, // Para el path
    inventario_id: 0, // Para el body
    ingreso: {
      proveedor_id: 1,
      orden_compra: `CP-${randomId}`,
      fecha_ingreso: ""
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
      sku: `PR-${randomId}-SD`,
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
    } else if (name === "fechaIngreso") {
      updatedFormData.ingreso.fecha_ingreso = value
    } 
    
    setFormData(updatedFormData);
  };

  const populateFormForEdit = (product) => {
    console.log("🔄 Producto recibido para editar:", product); // <-- ¡Nuevo log crítico!
  
    // Validación robusta del detalle_id
    const detalleId = parseInt(product.detalle_id, 10);

  
    setFormData({
      detalle_id: detalleId,
      inventario_id: product.inventario_id,
      ingreso: {
        id: product.entrada_id ? Number(product.entrada_id) : null,
        proveedor_id: product.proveedor_id ? Number(product.proveedor_id) : 1,
        fecha_ingreso: product.fecha_ingreso || new Date().toISOString().split('T')[0],
        orden_compra: product.orden_compra || "CP-008"
      },
      zapato: {
        id: product.zapato_id ? Number(product.zapato_id) : null,
        color: product.color || "",
        urlImagen: product.imagen || "",
        precioComercial: product.precio_comercial ? parseFloat(product.precio_comercial) : 0,
        talla: product.talla ? parseFloat(product.talla) : 0,
        sku: product.sku,
        modelo: {
          id: product.modelo_id,
          nombre: product.modelo || "",
          genero: product.genero || "",
          categoria: { 
            id: product.categoria_id ? Number(product.categoria_id) : 1 
          },
          marca: { 
            id: product.marca_id ? Number(product.marca_id) : 1 
          }
        }
      },
      almacen: {
        almacen_id: product.almacen_id ? Number(product.almacen_id) : 1
      },
      cantidad: product.stock ? parseInt(product.stock, 10) : 0,
      precio_compra: product.precio_compra ? parseFloat(product.precio_compra) : 0
    });
    
    console.log("✅ Formulario poblado:", formData); // Usar useEffect para ver esto
    setImagen(null);
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

// ejemplo de formato para enviar a la api de actualizar
const formDataUpdate = {
    ingreso: {
       id: 1,
       proveedor_id: 1,
       fecha_ingreso: ""
    },
    zapato: {
      id: 1,
      color: "",
      urlImagen: "",
      precioComercial: 400.50,
      talla: 44.00,
      modelo: {
        id: 1,
        nombre: "",
        genero: "",
        categoria: {
           id: 1
        },
        marca: {
            id: 1 
        }
      }
    },
    almacen: {
       almacen_id: 1
    },
    cantidad: 40,
    precio_compra: 8005,
    inventario_id: 1
}
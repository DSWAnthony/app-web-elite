import api from '../api'


export const getZapatillas = async () => {
    try {
        const response = await api.get('/zapato');
        // console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al obtener zapatillas:", error);
        return [];
    }
};

export const guardarAInventario = async (form, imagen) => {
    try {
        // Primero subir la imagen
        const formData = new FormData();
        formData.append("imagen", imagen);

        const result = await api.post('/imagen', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        const imgUrl = result.data.imgUrl;
        console.log("Imagen subida con éxito:", imgUrl);

        // Añadir la URL de la imagen al objeto de datos
        const finalForm = {
            ...form,
            zapato: {
                ...form.zapato,
                urlImagen: imgUrl
            }
        };

        // Enviar los datos del producto
        const response = await api.post('/ingreso/detalle', finalForm);
        console.log("Respuesta API:", response);
        
        return response.data;
    } catch (error) {
        console.error("Error al guardar zapatillas:", error);
        throw error;
    }
};
export const editarAInventario = async (formData, imagen) => {
    try {

        // console.log(formData);
        
        let imgUrl = formData.zapato.urlImagen;
        const detalleId = Number(formData.detalle_id);
        if (imagen) {
          const formDataImg = new FormData();
          formDataImg.append("imagen", imagen);
          const result = await api.post('/imagen', formDataImg);
          imgUrl = result.data.imgUrl;
        }
    
        const payload = {
          ...formData,
          // Mantenemos el inventario_id en el body
          inventario_id: formData.inventario_id,
          zapato: {
            ...formData.zapato,
            urlImagen: imgUrl
          }
        };
    
        // Usamos detalle_id solo en el path
        const response = await api.put(`/ingreso/detalle/${detalleId}`, payload);
        return response.data;
      } catch (error) {
        console.error("Error al actualizar:", error);
        throw error;
      }
};


export const getInventario = async () => {
    try {
        const response = await api.get('/inventario/detalle');
        console.log("Respuesta API:", response);
        // console.log("Primer elemento del inventario:", response.data[0]);
        return response.data;
    } catch (error) {
        console.error("Error al obtener zapatillas:", error);
        return [];
    }
};


export const deleteInventario = async (detalle_id) => {
    try {
        const response = await api.delete(`/ingreso/detalle/${detalle_id}`);
        console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al obtener zapatillas:", error);
        return [];
    }
};
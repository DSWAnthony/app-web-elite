import api from '../api'


export const getZapatillas = async () => {
    try {
        const response = await api.get('/zapato');
        console.log("Respuesta API:", response);
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

export const getInventario = async () => {
    try {
        const response = await api.get('/inventario/detalle');
        console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al obtener zapatillas:", error);
        return [];
    }
};

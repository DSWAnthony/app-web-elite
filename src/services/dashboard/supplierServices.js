import api from '../api'

export const getProveedores = async () => {
    try {
        const response = await api.get('/proveedor');
        console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al obtener zapatillas:", error);
        return [];
    }
};
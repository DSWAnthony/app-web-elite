import api from '../api'

export const getProveedores = async () => {
    try {
        const response = await api.get('/proveedor');
        // console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al obtener zapatillas:", error);
        return [];
    }
};
export const crearProveedor = async (data) => {
    try {
        const response = await api.post('/proveedor',data);
        // console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al crear zapatillas:", error);
        return [];
    }
};

export const eliminarProveedor = async (id) => {
    try {
        const response = await api.delete(`/proveedor/${id}`);
        // console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al ELIMINAR zapatillas:", error);
        return [];
    }
};

export const editarProveedor = async (id,proveedor) => {
    try {
        const response = await api.put(`/proveedor/${id}`,proveedor);
        // console.log("Respuesta API:", response);
        return response.data;
    } catch (error) {
        console.error("Error al editar zapatillas:", error);
        return [];
    }
};

import api from "../api"

export const getTotalInversion = async () => {
    try {
        const response = await api.get("dahsboard/total-inversion")
        // console.log(response);
        return response.data.total;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getTotalBajoStock = async () => {
    try {
        const response = await api.get("dahsboard/total-bajo-stock/5")
        // console.log(response);
        return response.data.total;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getTotalZapatos = async () => {
    try {
        const response = await api.get("dahsboard/total-zapatos")
        // console.log(response);
        return response.data.total;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getTotalProveedores = async () => {
    try {
        const response = await api.get("dahsboard/total-proveedores")
        // console.log(response);
        return response.data.total;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getStockPorMarca = async () => {
    try {
        const response = await api.get("dahsboard/total-stock-marca")
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getIngresosDelAnio = async () => {
    try {
        const response = await api.get("dahsboard/total-ingresos-ano/2025")
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return []
    }
}

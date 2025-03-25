import api from "./api";

export const loginUser = async (form) => {
  try {
    const response = await api.post("/auth/login", form);
    return response;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Error de autenticación");
    } else {
      throw new Error("Error de conexión con el servidor");
    }
  }
};
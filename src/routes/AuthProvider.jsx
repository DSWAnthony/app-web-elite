import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { loginUser } from '../services/authService';

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: true,
  error: null,

  login: async (username, password) => {
    try {
      set({ error: null }); // Resetear errores
      const form = { username, password };
      
      const response = await loginUser(form);
      
      if (!response.data) {
        throw new Error('Error en las credenciales');
      }
      
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      
      const user = jwtDecode(accessToken);
      set({ user, error: null });
      
      return true; // Éxito
    } catch (error) {
      let errorMessage = error.response?.data?.message || error.message;
      if (errorMessage === 'Unauthorized') {
        errorMessage = 'Usuario o contraseña incorrectos';
      }
      set({ error: errorMessage });
      return false; // Fallo
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    set({ user: null, loading: false, error: null });
  },

  initialize: async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      
      if (accessToken) {
        const decoded = jwtDecode(accessToken);
        if (decoded.exp * 1000 < Date.now()) {
          get().logout();
          return;
        }
        set({ user: decoded });
      }
    } catch (error) {
      console.error('Error inicializando auth:', error);
      get().logout();
    } finally {
      set({ loading: false });
    }
  }
}));
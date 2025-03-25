import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-elite.png';
import { useAuthStore } from '../routes/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login, user } = useAuthStore();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const { username, password } = form;

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const onChangeText = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError(''); // Limpiar error al cambiar texto
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message || "Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg border-0 rounded-lg mt-5" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-header bg-black text-white text-center py-4">
          <h3 className="font-weight-bold mb-0">Iniciar Sesión</h3>
          <img src={logo} alt="Logo" width={200} />
        </div>
        
        <div className="card-body p-4">
          {error && (
            <div className="alert alert-danger text-center mb-4 py-2">
              {error}
            </div>
          )}

          <div className="text-center mb-4">
            <i className="bi bi-person-circle" style={{ fontSize: '3rem', color: '#0d6efd' }}></i>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input 
                type="text" 
                className="form-control" 
                id="floatingUsername" 
                placeholder="Usuario"
                name="username"
                value={username}
                onChange={onChangeText} 
                required
                disabled={isSubmitting}
              />
              <label htmlFor="floatingUsername">Usuario</label>
            </div>
            
            <div className="form-floating mb-4">
              <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onChangeText} 
                required
                disabled={isSubmitting}
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            
            <div className="form-check mb-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="rememberPasswordCheck" 
                disabled={isSubmitting}
              />
              <label className="form-check-label" htmlFor="rememberPasswordCheck">
                Recordar contraseña
              </label>
            </div>
            
            <div className="d-grid gap-2">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="ms-2">Validando...</span>
                  </>
                ) : (
                  "Ingresar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
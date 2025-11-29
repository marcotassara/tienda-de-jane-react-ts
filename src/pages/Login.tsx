import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos
    
    try {
      await login({ username, password });
      navigate("/"); // ¡Éxito! Nos vamos al inicio
    } catch (err) {
      setError("Usuario o contraseña incorrectos 😢");
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4 text-danger fw-bold">Ingreso Usuarios</h2>
        
        <div className="card shadow p-4 border-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input 
                type="text" 
                className="form-control" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej: admin"
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ej: 123"
                required
              />
            </div>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <button type="submit" className="btn btn-danger w-100 py-2">
              Entrar
            </button>

            <div className="text-center mt-3">
                <small className="text-muted">
                  ¿No tienes cuenta? <Link to="/registro" className="text-danger fw-bold">Regístrate</Link>
                </small>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
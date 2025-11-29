import { useState } from "react"
import { authService } from "../services/authService"
import { useNavigate, Link } from "react-router-dom"

export default function Registro() {
  const navigate = useNavigate()
  
  // Estados para el formulario
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nombreCompleto: "",
    role: "USER" // Por defecto registramos Clientes (USER)
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    try {
      // Llamamos al servicio de registro (usando el endpoint POST /api/usuarios)
      await authService.register(formData)
      setSuccess(true)
      
      // Esperamos 2 segundos y redirigimos al login
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } catch (err) {
      setError("Error al registrar. Puede que el usuario ya exista.")
    }
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4 text-danger fw-bold">Crear Cuenta</h2>
        
        <div className="card shadow-sm p-4 border-0">
          {success ? (
            <div className="alert alert-success text-center">
              ¡Cuenta creada con éxito! 🎉 <br /> Redirigiendo al login...
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombreCompleto"
                  className="form-control" 
                  value={formData.nombreCompleto}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Usuario (Username)</label>
                <input 
                  type="text" 
                  name="username"
                  className="form-control" 
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Ej: jperez"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  name="password"
                  className="form-control" 
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button type="submit" className="btn btn-danger w-100 py-2 mb-3">
                Registrarse
              </button>

              <div className="text-center">
                <small className="text-muted">
                  ¿Ya tienes cuenta? <Link to="/login" className="text-danger fw-bold">Ingresa aquí</Link>
                </small>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
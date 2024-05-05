import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formulario de Registro</h1>
        <form>
          
          <div>
            <label htmlFor="nombreCompleto">Nombre Completo:</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              placeholder="Ingrese su nombre completo"
            />
          </div>

         
          <div>
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Ingrese su correo electrónico"
            />
          </div>

        
          <div>
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              placeholder="Ingrese su contraseña"
            />
          </div>

          
          <div>
            <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmarContrasena"
              name="confirmarContrasena"
              placeholder="Confirme su contraseña"
            />
          </div>

          <div>
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
            />
          </div>

          
          <div>
            <label>Género:</label>
            <label>
              <input
                type="radio"
                name="genero"
                value="Masculino"
              /> Masculino
            </label>
            <label>
              <input
                type="radio"
                name="genero"
                value="Femenino"
              /> Femenino
            </label>
            <label>
              <input
                type="radio"
                name="genero"
                value="Otro"
              /> Otro
            </label>
          </div>

         
          <div>
            <label htmlFor="pais">País de Residencia:</label>
            <select
              id="pais"
              name="pais"
            >
              <option value="">Seleccionar país</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="México">México</option>
              <option value="España">España</option>
              <option value="Estados Unidos">Estados Unidos</option>
            </select>
          </div>

          
          <div>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
              /> Acepto los términos y condiciones
            </label>
          </div>

         
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;


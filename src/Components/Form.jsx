import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Validación del nombre
    if (formData.nombre.length <= 5) {
      setNombreError('Por favor ingrese un nombre válido (más de 5 caracteres)');
      hasError = true;
    } else {
      setNombreError("")
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Por favor ingrese un correo electrónico válido');
      hasError = true;
    } else {
      setEmailError("")
    }

    if (hasError) {
      setEnviado(false); 
    }

    if (formData.nombre.length > 5 && emailRegex.test(formData.email)) {
      setEnviado(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputForm">
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </div>
        <div  className="inputForm">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {nombreError && <div className="error">{nombreError}</div>}
      {emailError && <div className="error">{emailError}</div>}

      {enviado && (
        <div>
          <h3>Gracias {formData.nombre}, te contactaremos cuando antes vía mail</h3>
        </div>
      )}

    </div>
  );
};

export default Form;

import React, { useContext }  from "react"
import { Link } from "react-router-dom"
import { ContextGlobal } from "./utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <h1>DH ODONTO</h1>

      <div className={`links ${state.theme}`}>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to= "/favs">Favs</Link>
        <button className="themeButton" onClick={toggleTheme}>
          {state.theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
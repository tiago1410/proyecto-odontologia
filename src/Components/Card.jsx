import React from "react";
import { useNavigate } from "react-router-dom";


const Card = ({ name, username, id, isFavorite, toggleFavorite }) => {

  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    e.stopPropagation();
    
    const favorito = {
      name: name,
      username: username,
      id: id
    };

    if (localStorage.getItem(`fav_${id}`)) {
      alert("¡Este dentista ya está en tus favoritos!");
      return;
    }

    localStorage.setItem(`fav_${id}`, JSON.stringify(favorito));
    alert("¡Dentista añadido a favoritos correctamente!");

  };

  const removeFav = (e) => {
    e.stopPropagation();

    if (localStorage.getItem(`fav_${id}`)) {
      localStorage.removeItem(`fav_${id}`);
      alert("¡Dentista eliminado de tus favoritos!");
      window.location.reload();
    } 
  };

  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/dentista/${id}`)}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <img src="./images/doctor.jpg"></img>
    
        <h4>{name}</h4>
        <p>{username}</p>
        <p>ID: {id}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={isFavorite ? removeFav : addFav} className="favButton">
          {isFavorite ? "❌" : "⭐"}
        </button>
    </div>
  );
};

export default Card;

import React, { useEffect, useState, useContext }  from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(ContextGlobal);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    
    // Recupero favoritos del localStorage
    const keys = Object.keys(localStorage);
    const favs = keys.filter(key => key.startsWith('fav_')).map(key => JSON.parse(localStorage.getItem(key)));
    setFavoritos(favs);
  }, []);

    

  return (
    <>
    <div className={`favs ${state.theme}`}>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favoritos.length > 0 ? (
          favoritos.map((favorito, index) => (
            <Card
              key={index}
              name={favorito.name}
              username={favorito.username}
              id={favorito.id}
              isFavorite={true}
            />
          ))
        ) : (
          <h3>No hay dentistas favoritos.</h3>
        )}
      </div>
    </div>
      
    </>
  );
};

export default Favs;


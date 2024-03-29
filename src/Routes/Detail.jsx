import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <>
      {dentist ? (
        <div className={`dentistInfo ${state.theme}`}>
          <h1>Información del dentista</h1>

        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

          <table>
            <tbody>
              <tr>
                <td>Nombre</td>
                <td>Email</td>
                <td>Telefono</td>
                <td>Website</td>
              </tr>
              <tr className={`tableRow ${state.theme}`}>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h2>Loading...</h2> 
      )}
    </>
  )
}

export default Detail
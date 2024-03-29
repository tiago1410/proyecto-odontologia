import React, { useEffect, useContext } from 'react'
import { ContextGlobal, loadApiData } from '../Components/utils/global.context';
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    loadApiData(dispatch);
  }, [dispatch]);

  return (
    <main className={`favs ${state.theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        
        {
          state.apiData && state.apiData.map(dentist => 
            <Card key={dentist.id}name={dentist.name} username={dentist.username} id={dentist.id}/>)
        }
      </div>
    </main>
  )
}

export default Home
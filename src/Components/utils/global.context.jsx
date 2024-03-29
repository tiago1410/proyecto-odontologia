import { createContext, useReducer, useMemo } from "react";

export const initialState = {
  theme: localStorage.getItem('theme') || 'light', 
  apiData: null
}

export const ActionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  API_DATA: 'API_DATA'
}

const reducer = (state, action) => {
  switch (action.type) {

    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return {
        ...state,
        theme: newTheme,
      };

    case 'API_DATA':
      return {
        ...state,
        apiData: action.payload,
      };

    default:
      return state;
  }
};

export const loadApiData = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    dispatch({ type: ActionTypes.API_DATA, payload: data });
  })
  .catch((error) => console.error('Error fetching data:', error));
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
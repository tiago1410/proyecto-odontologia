import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import App from './App';
import { ContextProvider } from './Components/utils/global.context';

export const BasicLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <BasicLayout>
          <App/>
        </BasicLayout>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);



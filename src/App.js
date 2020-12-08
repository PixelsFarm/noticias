import React, { Fragment } from 'react';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'


function App() {
  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias" 
      />

      <div className="container white">
      <Formulario />
      </div>
    </Fragment>
  );
}

export default App;

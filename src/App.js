import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'


function App() {

  const [categoria, guardarCategoria] = useState('')

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias" 
      />

      <div className="container white">
      <Formulario
        guardarCategoria={guardarCategoria}
      />
      </div>
    </Fragment>
  );
}

export default App;

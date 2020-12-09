import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'


function App() {

  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {

    const consultarAPI = async () => {
        //* https://newsapi.org/
        //* get http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-08&sortBy=publishedAt&apiKey=API_KEY
        //* api key: 214b596a5c574a11988e22a3c4f24c18
        const key = '214b596a5c574a11988e22a3c4f24c18'
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${key}`
        const resultado = await axios.get(url)
        const articles = resultado.data.articles
        //console.log(articles) 
        guardarNoticias(articles)      
    }
    consultarAPI()
    
  }, [categoria])

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

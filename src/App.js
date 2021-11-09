import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  // Definir la categoria
  const[categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  // Haciendo la Consulta a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=3739e2bda7cf4d99b4a1a6df98e846a3`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria])

  return (
    <Fragment>

      <Header 
        titulo='Buscador Noticias'
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
         // Le pasamos las noticias, que estan en el useState
          noticias={noticias}
        />
      </div>


    </Fragment>
  );
}

export default App;

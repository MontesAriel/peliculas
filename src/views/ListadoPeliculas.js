
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import PeliculasJson from '../peliculas.json'
import { useState } from 'react';

function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);

  const TOTAL_POR_PAGINA = 4;

  let peliculas = PeliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice((paginaActual - 1)* TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA)
  }
  
  const getTotalPaginas = () => {
     let cantidadTotalDePeliculas = PeliculasJson.length;
   return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);

  }

  cargarPeliculas();

  return (
    <PageWrapper> 
      
          {peliculas.map(pelicula =>   {
             
            const {titulo, calificacion, director, actores, duracion, img, fecha, descripcion} = pelicula;  

            return (<Pelicula titulo= {titulo} calificacion={calificacion} director={director}  img={img}
                     actores={actores} fecha={fecha} duracion={duracion} >
                      {descripcion}
                   
            </Pelicula>
          )}  
          )}

    <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
    }}/>
           
    </PageWrapper>
 
  );
}

export default ListadoPeliculas;

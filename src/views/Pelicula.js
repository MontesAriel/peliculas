

function Pelicula(props) {
      const {titulo, calificacion, director, actores, fecha, duracion, img} = props
    return(
        <div className="movie-item-style-2">
              <img src={img} alt="" />
              <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{titulo}</a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{calificacion}</span> /10</p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Run Time: {duracion}     <span>MMPA: PG-13 </span>    .     <span>Release: {fecha}</span></p>
                <p>Director: <a href="#">{director}</a></p>
                <p>Stars: <a href="#">{actores}</a></p>
              </div>
        </div>
    )    
}

export default Pelicula;
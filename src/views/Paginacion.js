const Paginacion = (props) => {

    const {pagina, total, onChange} = props;

    const getPaginas = () => {
        
        const resultado = [];
        for(let i = 0; i < total; i++){
            let paginas = i + 1;

            resultado.push(
            <a  onClick={() => onChange(paginas)} className={pagina === (paginas) ? 'active' : ''}>
                {(paginas)}
            </a>
            );
        }

        return resultado;
    }

    return(
        <div className="topbar-filter">
            <label>Movies per page:</label>
            <select>
            <option value="range">5 Movies</option>
            <option value="saab">10 Movies</option>
            </select>
            <div className="pagination2">
            <span>Page {pagina} of {total}:</span>

            {getPaginas()}

            </div>
        </div>
    )
}


export default Paginacion;
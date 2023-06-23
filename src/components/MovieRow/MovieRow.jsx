export const MovieRow = ({title, items}) => {
    //console.log({title})
    //console.log({items})
    return(
        <div>
            <h2>{title}</h2>
            <div>
                {items? items.results.map((item, index)=>{
                    return(
                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} key={index}/> 
                    )
                } ): null}
            </div>

        </div>
    )
}

export default MovieRow

import { CategoryTitle, Img, ItemContainer, ListAreaContainer, ListContainer, MovieRowContainer } from "./MovieRowStyle"

export const MovieRow = ({title, items}) => {
    //console.log({title})
    //console.log({items})
    return(
        <MovieRowContainer>
            <CategoryTitle>{title}</CategoryTitle>
            <ListAreaContainer>
                <ListContainer>
                    {items? items.results.map((item, index)=>{
                        return(
                            <ItemContainer key={index}>
                                <Img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/> 
                            </ItemContainer>    
                        )
                    } ): null}
                </ListContainer>
                
            </ListAreaContainer>

        </MovieRowContainer>
    )
}

export default MovieRow
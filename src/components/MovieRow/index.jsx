import { useState } from "react"
import { CategoryTitle, IconRow, Img, ItemContainer, ListAreaContainer, ListContainer, MovieRowContainer, NavLeftIcon, NavRightIcon } from "./MovieRowStyle"

export const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX ] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0
        };
        setScrollX(x)
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        };
        setScrollX(x)
    };

    return(
        <MovieRowContainer>
            <CategoryTitle>{title}</CategoryTitle>
            <NavLeftIcon onClick={handleLeftArrow}>
                <IconRow className="material-symbols-outlined">
                    navigate_before
                </IconRow>
            </NavLeftIcon>
            <NavRightIcon onClick={handleRightArrow}>
                <IconRow className="material-symbols-outlined">
                    navigate_next
                </IconRow>
            </NavRightIcon>
            <ListAreaContainer>
                <ListContainer style={{
                    marginLeft: scrollX,
                    width: items? items.results.length*150 : null
                }}>
                    {items? items.results.map((item, index)=>{
                        return(
                            <ItemContainer key={index}>
                                { <Img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.name}/> }
                            </ItemContainer>    
                        )
                    } ): null}
                </ListContainer>
            </ListAreaContainer>
        </MovieRowContainer>
    )
}

export default MovieRow

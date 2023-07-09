import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import {
  MovieRow,
  FeaturedMovie,
  Header
} from "../../components"
import { Lists } from "./HomePageStyle";


function HomePage () {
    const context = useContext(GlobalContext);
    const { moviesList, setMoviesList, featuredData } = context;
     

    /* const [ originals, setOriginals ] = useState([]);
    const [ trending, setTrending ] = useState([]);
    const [ topRated, setTopRated ] = useState([]);
    const [ action, setAction ] = useState([]);
    const [ comedy, setComedy ] = useState([]);
    const [ horror, setHorror ] = useState([]);
    const [ romance, setRomance ] = useState([]);
    const [ documentary, setDocumentary ] = useState([]);


    const filterFilm = () => {
      if (moviesList.length > 0) {
        for (const category of moviesList) {
          // console.log({category})
          if (category.items) {
            //console.log(category.items)
            for (const film of category.items.results) {
                console.log('oi')
              if (film.poster_path && film.poster_path.length > 0) {
                if (category.slug === "originals") {
                    setMoviesList((prevMoviesList) => [
                        {
                            ...prevMoviesList[0], 
                            items:[...items, film]
                        }
                    ]); 
                    setState(!state)
                    console.log({film})
                } else if (category.slug === "trending") {
                  setTrending((preTrending) => [...preTrending, film]);
                } else if (category.slug === "topRated") {
                  setTopRated((prevTopRated) => [...prevTopRated, film]);
                } else if (category.slug === "action") {
                  setAction((prevAction) => [...prevAction, film]);
                } else if (category.slug === "comedy") {
                  setComedy((prevComedy) => [...prevComedy, film]);
                } else if (category.slug === "horror") {
                  setHorror((prevHorror) => [...prevHorror, film]);
                } else if (category.slug === "romance") {
                  setRomance((prevRomance) => [...prevRomance, film]);
                } else if (category.slug === "documentary") {
                  setDocumentary((prevDocumentary) => [
                    ...prevDocumentary,
                    film,
                  ]);
                }
              }
            }
          }
        }
      }
    };
    useEffect(()=>{
        filterFilm()
    }, []) */

    

    return(
        <>
          <Header/>
            {featuredData && <FeaturedMovie/>}
            <Lists>
                {moviesList.length>0 && moviesList.map((category, index)=> 
                    <MovieRow
                        key={index}
                        title={category.title}
                        items={category.items}
                    />
                )}
            </Lists>
        </>
    )
}

export default HomePage

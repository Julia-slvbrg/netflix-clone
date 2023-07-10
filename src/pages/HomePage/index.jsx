import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { MovieRow, FeaturedMovie, Header} from "../../components"
import { Lists } from "./HomePageStyle";


function HomePage () {
  const context = useContext(GlobalContext);
  const { moviesList, setMoviesList, featuredData } = context;
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const scrollListener = () => {
      window.scrollY > 10? setBlackHeader(true) : setBlackHeader(false)
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])
  

  return(
    <>
      <Header black={blackHeader}/ >
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

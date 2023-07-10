import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { MovieRow, FeaturedMovie, Header, Footer} from "../../components"
import { Lists } from "./HomePageStyle";


function HomePage () {
  const context = useContext(GlobalContext);
  const { moviesList, featuredData, blackHeader } = context;
  
  

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
          <Footer/>
      </>
  )
}

export default HomePage

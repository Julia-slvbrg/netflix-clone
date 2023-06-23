import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import MovieRow from "../components/MovieRow/MovieRow";


function HomePage () {
    const context = useContext(GlobalContext);
    const { moviesList } = context;

    return(
        <>
            <section>
                {moviesList.length>0 && moviesList.map((category, index)=> 
                   
                        <MovieRow
                            key={index}
                            title={category.title}
                            items={category.items}
                        />
                    
                )}
            </section>
        </>
    )
}

export default HomePage

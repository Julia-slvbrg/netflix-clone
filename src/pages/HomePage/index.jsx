import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { MovieRow, FeaturedMovie, Header, Footer} from "../../components"
import { Lists, LoadingScreen } from "./HomePageStyle";
import loadingGif from "../../assets/Netflix_LoadTime.gif"


function HomePage () {
    const context = useContext(GlobalContext);
    const { moviesList, featuredData, blackHeader } = context;

    return(
        <>
            <Header black={blackHeader}/ >
            {featuredData && <FeaturedMovie/>}
            <Lists>
                {moviesList.map((category, index)=> 
                    <MovieRow
                        key={index}
                        title={category.title}
                        items={category.items}
                    />
                )}
            </Lists>
            <Footer/>
            {moviesList.length<=0 &&
                <LoadingScreen>
                    <img src={loadingGif} />
                </LoadingScreen>
            }
        </>
    )
}

export default HomePage
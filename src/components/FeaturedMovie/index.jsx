import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { FeaturedContainder, Name, HorizontalTransparencie, VerticalTransparencie, Info, Rating, Year, Seasons, Description, Genres, ButtonsContainer, WatchBtn, AddListBtn, PlusIcon, PlayIcon} from "./FeaturedMovieStyle";


export const FeaturedMovie = () => {
    const context = useContext(GlobalContext);
    const { featuredData } = context;

    let firstDate = new Date(featuredData.first_air_date);

    let genres = [];
    for(let i in featuredData.genres){
        genres.push(featuredData.genres[i].name);
    };

    //console.log(featuredData)
    
    return(
        <FeaturedContainder
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData.backdrop_path})`
            }}
        >
            <VerticalTransparencie>
                <HorizontalTransparencie>
                    <Name>
                        {featuredData.original_name}
                    </Name>
                    <Info>
                        <Rating>
                            {featuredData.vote_average.toFixed(1)} points
                        </Rating>
                        <Year>
                            {firstDate.getFullYear()}
                        </Year>
                        <Seasons>
                            {featuredData.number_of_seasons} season{featuredData.number_of_seasons !== 1 ? 's' : ''}
                        </Seasons>
                        <Description>
                            {featuredData.overview}
                        </Description>
                       <ButtonsContainer>
                            <WatchBtn>
                                <PlayIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </PlayIcon>
                                Play
                            </WatchBtn>
                            <AddListBtn>
                            
                                <PlusIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </PlusIcon>
                                My List
                            </AddListBtn>

                       </ButtonsContainer>
                        <Genres>
                            <strong>Genres:</strong> {genres.join(', ')}
                        </Genres>
                    </Info>
                </HorizontalTransparencie>
            </VerticalTransparencie>
        </FeaturedContainder>
    )
}

export default FeaturedMovie
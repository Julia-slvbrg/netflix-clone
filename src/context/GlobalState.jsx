import { useEffect, useState } from "react";
import { API_KEY } from "../AUTH-KEYS/API_KEY"
import { useRequestData } from "../hooks/useRequestData"
import { GlobalContext } from "./GlobalContext"

export default function GlobalState({children}){
    const [moviesList, setMoviesList] = useState([]);
    

    //const [id] = useRequestData(`/genre/movie/list?api_key=${API_KEY}`);
    const [films] = useRequestData(`/discover/tv?api_key=${API_KEY}&with_network=213&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [trending] = useRequestData(`/trending/all/week?api_key=${API_KEY}&with_network=213&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [topRated] = useRequestData(`/movie/top_rated?api_key=${API_KEY}&with_network=213&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [action] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genre=28&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [comedy] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genre=35&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [horror] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genre=27&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [romance] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genre=10749&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    const [documentary] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genre=99&with_original_language=en&language=pt-BR&sort_by=popularity.desc`);
    

    useEffect(()=>{
        setMoviesList([
            {
               slug: 'originals',
               title: 'NETFLIX originals',
               items: films
            },
            {
                slug: 'trending',
                title: 'Recomended for you',
                items: trending
             },
             {
                slug: 'topRated',
                title: 'Top Rated',
                items: topRated
             },
             {
                slug: 'action',
                title: 'Action',
                items: action
             },
             {
                slug: 'comedy',
                title: 'Comedy',
                items: comedy
             },
             {
                slug: 'horror',
                title: 'Horror',
                items: horror
             },
             {
                slug: 'romance',
                title: 'Romance',
                items: romance
             },
             {
                slug: 'documentary',
                title: 'Documentary',
                items: documentary
             }
        ])
    },[films]);
    
    console.log({moviesList})

    

    const data ={
        
    }

    return(
        <GlobalContext.Provider value={data}>
           {children}
        </GlobalContext.Provider>
    )
}
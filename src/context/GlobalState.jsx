import { useEffect, useState } from "react";
import { API_KEY } from "../AUTH-KEYS/API_KEY"
import { useRequestData } from "../hooks/useRequestData"
import { GlobalContext } from "./GlobalContext"
import { BASE_URL } from "../constants/BASE_URL";
import axios from "axios";

export default function GlobalState({children}){
   const [moviesList, setMoviesList] = useState([]);
   const [features, setFeatures] = useState([]);
   const [featuredData, setFeaturedData] = useState(null);


   //const [id] = useRequestData(`/genre/movie/list?api_key=${API_KEY}`);
   const [films] = useRequestData(`/discover/tv?api_key=${API_KEY}&with_network=213&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [trending] = useRequestData(`/trending/all/week?api_key=${API_KEY}&with_network=213&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [topRated] = useRequestData(`/movie/top_rated?api_key=${API_KEY}&with_network=213&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [action] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genres=28&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [comedy] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genres=35&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [horror] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genres=27&with_original_language=en&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [romance] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genres=10749&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);
   const [documentary] = useRequestData(`/discover/movie?api_key=${API_KEY}&with_genres=99&with_original_language=en&language=en-EUA&sort_by=popularity.desc`);

   //console.log({films})
   
   const getFeaturedFilm = (callback) => {
      let feat 
      if(films){
         const randomNum = Math.floor(Math.random() * (films.results.length -1))
         //console.log({randomNum})
         setFeatures(films.results[randomNum]);
         feat = films.results[randomNum]
         //console.log({featuredData})
      };
     feat? callback(feat.id, 'tv') : null
   };

   
   const getFeaturedFilmDeatails = async (movieId, type) => {
      if(movieId){
         if(type==='movie'){
            try {
               const response = await
               axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-EUA`)
               //console.log(response.data)
               setFeaturedData(response.data);
            } catch (error) {
               console.log(error.response)
            }              
         }else{
            try {
               const response = await
               axios.get(`${BASE_URL}/tv/${movieId}?api_key=${API_KEY}&language=en-EUA`)
               //console.log(response.data)
               setFeaturedData(response.data);
               
            } catch (error) {
               console.log(error.response)
            }
         }
      }
   };


   
   useEffect(()=>{
      setMoviesList([
         {
            slug: 'originals',
            title: 'NETFLIX Originals',
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
      ]);
      getFeaturedFilm(getFeaturedFilmDeatails);
   },[films]);
    
   //console.log({moviesList})
   //console.log({featuredData})

   const [blackHeader, setBlackHeader] = useState(false);
   useEffect(()=>{
      const scrollListener = () => {
         window.scrollY > 10? setBlackHeader(true) : setBlackHeader(flase);
      };
      window.addEventListener('scroll', scrollListener);
      return () => {
         window.removeEventListener('scroll', scrollListener);
      }
   }, [])

  
   const data ={
      moviesList,
      featuredData,
      blackHeader
   }

   return(
      <GlobalContext.Provider value={data}>
         {children}
      </GlobalContext.Provider>
   )
}
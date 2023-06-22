import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/BASE_URL";

export const useRequestData = (endpoint, initialState) => {
    const [filmListFromAPI, setFilmListFromAPI] = useState(initialState);

    useEffect(()=>{
        axios.get(`${BASE_URL}${endpoint}`)
        .then((response)=>{
            //console.log(response.data)
            setFilmListFromAPI(response.data)
        })
        .catch ((error)=>{
            console.log(error)
        })
        
    },[endpoint])
    
    return[filmListFromAPI]
}


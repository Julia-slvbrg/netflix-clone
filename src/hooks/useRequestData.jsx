import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { BASE_URL } from "../constants/BASE_URL";
import { GlobalContext } from "../context/GlobalContext";

export const useRequestData = (endpoint, initialState) => {
    const context = useContext(GlobalContext);
    //const { status, setStatus } = context;
    const [filmListFromAPI, setFilmListFromAPI] = useState(initialState);


    useEffect(()=>{
        axios.get(`${BASE_URL}${endpoint}`)
        .then((response)=>{
            //console.log(response.data)
            setFilmListFromAPI(response.data)
            //setStatus(!status)
        })
        .catch ((error)=>{
            console.log(error)
        })
        
    },[endpoint])
    
    return[filmListFromAPI]
}


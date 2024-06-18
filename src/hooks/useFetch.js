import { useState,useEffect } from "react";

export const useFetch=(apiPath,queryTerm="")=>{
    const [data,setData]=useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=31b0f3a696895e0282aae089e0f55a96&query=${queryTerm}`

    useEffect(()=>{
        async function fetchMovies(){
            const response=await fetch(url);
            const json=await response.json();
            setData(json.results);
        }
        fetchMovies();
    },[url])
return {data};
}
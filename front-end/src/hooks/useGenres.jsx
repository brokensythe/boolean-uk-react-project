import { useEffect, useState } from "react";

function useGenres() {
    const [genres, setGenres] = useState([])

   
        useEffect(()=>{
            fetch("http://localhost:4000/genres")
            .then(response => {
              if (response.ok) return response.json()
              throw new Error('Network response was not ok.')
            })
            .then(data => setGenres(data))
        }, [setGenres])



    return genres
}
export default useGenres
import React, { useState } from "react"

export const GenreContext = React.createContext()

const GenreProvider = props => {
    const [genres, setGenres] = useState([])

    const getGenres = () => {
        return fetch("http://localhost:8000/genres")
        .then(res => res.json())
        .then(setGenres)
    }

    return(
        <GenreContext.Provider value = {{
            genres,
            getGenres
        }}>
            {props.children}
        </GenreContext.Provider>
    )
}

export default GenreProvider

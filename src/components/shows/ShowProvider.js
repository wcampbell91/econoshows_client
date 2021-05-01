import React, { useEffect, useState } from "react"

export const ShowContext = React.createContext()

const ShowProvider = props => {
    const [ show, setShow ] = useState({})
    const [ shows, setShows ] = useState([])

    useEffect(() => {
        getShows()
    }, [])

    const getShows = () => {
        return new Promise((resolve, reject) => fetch("https://econoshows-api.herokuapp.com/shows")
        .then(res => {
            res.json().then(res => {
            setShows(res)
            resolve(res)
        }).catch(err => reject(err))
    }).catch(err => reject(err))
)}

    const getShow = id => {
        return fetch(`https://econoshows-api.herokuapp.com/shows/${id}`)
                    .then(res => res.json())
                    .then((res) => {
                        setShow(res)
                        return res
                    })
    }

    const createShow = show => {
        return fetch("https://econoshows-api.herokuapp.com/shows", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(show)
        })
        .then(res => res.json())
        .then(getShows)
    }

    const updateShow = show => {
        console.log(show)
        return fetch(`https://econoshows-api.herokuapp.com/shows/${show.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(show)
        })
    }

    const deleteShow = id => {
        return fetch(`https://econoshows-api.herokuapp.com/shows/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
        .then(getShows)
    }

    return (
        <ShowContext.Provider value={{
            show,
            shows,
            getShow,
            getShows,
            createShow,
            updateShow,
            deleteShow
        }}>
            {props.children}
        </ShowContext.Provider>
    )
}

export default ShowProvider

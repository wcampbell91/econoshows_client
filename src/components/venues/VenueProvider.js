import React, { useState, useEffect } from "react"

export const VenueContext = React.createContext()

const VenueProvider = props => {
    const [ venues, setVenues ] = useState([])
    const [ venue, setVenue ] = useState({})

    useEffect(() => {
        getVenues()
    }, [])

    const getVenue = id => {
        return fetch(`https://econoshows-api.herokuapp.com/venues/${id}`, {
        })
        .then(res => res.json())
        .then(res => {
            setVenue(res)
            return res
        })
    }

    const getVenues = () => {
        return new Promise((resolve, reject) => fetch("https://econoshows-api.herokuapp.com/venues")
            .then(res => {
                res.json().then(res => {
                setVenues(res)
                resolve(res)
            }).catch(err => reject(err))
        }).catch(err => reject(err))
    )}

    const registerVenue = venue => {
        return fetch("https://econoshows-api.herokuapp.com/register_venue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(venue)
        })
    }

    const updateVenue = venue => {
        return fetch(`https://econoshows-api.herokuapp.com/venues/${venue.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(venue)
        })
        .then(setVenue)
    }

    const deleteVenue = id => {
        return fetch(`https://econoshows-api.herokuapp.com/venues/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
        .then(getVenues)
    }

    return (
        <VenueContext.Provider value={{
            venue,
            venues,
            getVenue,
            getVenues,
            registerVenue,
            updateVenue,
            deleteVenue
        }}>
            {props.children}
        </VenueContext.Provider>
    )
}

export default VenueProvider

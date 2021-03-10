import React, { useState } from "react"

export const VenueContext = React.createContext()

const VenueProvider = props => {
    const [ venue, setVenue ] = useState({})
    const [ venues, setVenues ] = useState([])

    const getVenue = id => {
        return fetch(`http://localhost:8000/venues/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json())
        .then(setVenue)
    }

    const getVenues = () => {
        return fetch("http://localhost:8000/venues", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
        .then(res => res.json)
        .then(setVenues)
    }

    const registerVenue = venue => {
        return fetch("http://localhost:8000/venues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(venue)
        })
        .then(res => res.json())
    }

    const updateVenue = venue => {
        return fetch(`http://localhost:8000/venues/${venue.id}`, {
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
        return fetch(`http://localhost:8000/venues/${id}`, {
            method: "DELETE"
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

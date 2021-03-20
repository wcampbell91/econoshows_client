import React, { useState } from "react"

export const BandContext = React.createContext()

const BandProvider = props => {
    const [bands, setBands] = useState([])
    const [band, setBand] = useState({})

    const getBand = (bandId) => {
        return fetch(`http://localhost:8000/bands/${bandId}`, {
        })
        .then(res => res.json())
        .then((res) => {
            setBand(res)
            return res
        })
    }

    const getBands = () => {
        return fetch("http://localhost:8000/bands", {
        })
        .then(res => res.json())
        .then(setBands)
        }

    const registerBand = band => {
        return fetch("http://localhost:8000/register_band", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(band)
        })
    }

    const updateBand = band => {
        return fetch(`http://localhost:8000/bands/${band.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(band)
        })
    }

    const deleteBand = id => {
        return fetch(`http://localhost:8000/bands/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("token")}`
            }
        })
        .then(getBands)
    }

    
    return (
        <BandContext.Provider value ={{
            band,
            bands,
            getBand,
            getBands,
            registerBand,
            updateBand,
            deleteBand
        }}>
            {props.children}
        </BandContext.Provider>
    )
}

export default BandProvider

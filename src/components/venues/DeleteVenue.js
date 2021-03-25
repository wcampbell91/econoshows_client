import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"


const DeleteVenue = props => {
    const { deleteVenue } = useContext(VenueContext)
    const { venueId } = props.match.params
    return (
        <div className="container justify-content-center">
            <h3 className="text-center">Are you sure you want to delete your profile?</h3>
            <Button variant="danger" className="dangerButton" onClick={e => {
                deleteVenue(venueId)
                .then(() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user_id")
                    localStorage.removeItem("venue_id")
                    props.history.push('/venues')
                })
            }}>Yes</Button>
            <Button variant="secondary" onClick={e => props.history.push(`/venues/${venueId}`)}>No</Button>
        </div>
    )
}

export default DeleteVenue

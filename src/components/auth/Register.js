import React from "react"
import { Link } from "react-router-dom"

const Register = props => {
    return (
        <div className="container justify-content-center">
            <h3 className="text-center">Are you a Band or a Venue?</h3>
            <Link className="band_link btn btn-secondary mr-4" to="/registerBand">Band</Link>
            <Link className="venue_link btn btn-secondary" to="/registerVenue">Venue</Link>
        </div>
    )
}

export default Register

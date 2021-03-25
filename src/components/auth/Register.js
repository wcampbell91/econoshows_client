import React from "react"
import { Link } from "react-router-dom"
import { Container, Button } from "react-bootstrap"

const Register = props => {
    return (
        <Container>
            <h3 className="text-center mb-4">Are you a Band or a Venue?</h3>

            <Button variant="dark" className="band_link mr-4 offset-5" href="/registerBand">Band</Button>
            <Button variant="dark" className="venue_link" href="/registerVenue">Venue</Button>
        </Container>
    )
}

export default Register

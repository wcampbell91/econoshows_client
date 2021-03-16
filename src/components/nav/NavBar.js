import React from 'react'
import "./NavBar.scss"
import { Navbar, Nav, Button } from "react-bootstrap"
// import { BandContext } from "../bands/BandProvider"
// import { VenueContext } from "../venues/VenueProvider"


const NavBar = props => {
    // const { getBand, band } = useContext(BandContext)
    // const { getVenue, venue } = useContext(VenueContext)

    // const userId = localStorage.getItem("user_id")

    // useEffect(() => {
    //     userId ? getBand(userId) : getVenue(userId)
    // }, [])

    return (
        <Navbar fixed="top" className="Navbar" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">EconoShows</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Nav.Link className="center-link" href="/bands">Bands</Nav.Link>
                        <Nav.Link className="center-link" href="/venues">Venues</Nav.Link>
                        <Nav.Link className="center-link" href="/shows">Shows</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    { (localStorage.getItem("token") !== null) 
                    ?
                        <Nav.Link className="ml-auto"
                        onClick={() => {
                            localStorage.removeItem("token")
                            localStorage.removeItem("user_id")
                            localStorage.removeItem("band_id")
                            localStorage.removeItem("venue_id")
                            props.history.push({ pathname: "/"})
                        }}>Logout</Nav.Link>
                    : 
                        <>
                        <Nav.Link href="/login">Login / Register</Nav.Link>
                        </>
                    }  
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

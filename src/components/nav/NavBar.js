import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.scss"
import { Navbar, Nav, Button } from "react-bootstrap"
import { BandContext } from "../bands/BandProvider"
import { VenueContext } from "../venues/VenueProvider"


const NavBar = props => {
    const { getBand, band } = useContext(BandContext)
    const { getVenue, venue } = useContext(VenueContext)

    const userId = localStorage.getItem("user_id")

    useEffect(() => {
        userId ? getBand(userId) : getVenue(userId)
    }, [])

    return (
        <Navbar fixed="top" className="Navbar" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">EconoShows</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/bands">Bands</Nav.Link>
                    <Nav.Link href="/venues">Venues</Nav.Link>
                    <Nav.Link href="/shows">Shows</Nav.Link>
                    { (localStorage.getItem("token") !== null) 
                    ?
                        <Button variant="primary"
                        onClick={() => {
                            localStorage.removeItem("token")
                            localStorage.removeItem("user_id")
                            props.history.push({ pathname: "/"})
                        }}>Logout</Button>
                    : 
                        <>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Sign up!</Nav.Link>
                        </>
                    }  
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar

import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.scss"
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
        <ul className="navbarm t-0">
            <li className="navbar__logo">
                <h1>EconoShows</h1>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="">Bands</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="">Venues</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="">Shows</Link>
            </li>
            { (localStorage.getItem("token") !== null) ?
            <li className="nav-item navbar__item">
                <button className="btn btn-primary nav__button"
                onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user_id")
                    props.history.push({ pathname: "/"})
                }}>Logout</button>
            </li>
            : <>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
                </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/register">Sign up!</Link>
            </li>
            </>
        }  
        </ul>
    )
}

export default NavBar

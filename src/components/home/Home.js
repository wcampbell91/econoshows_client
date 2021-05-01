import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {Container, Card, Row, Col} from "react-bootstrap"
import  { ShowContext } from "../shows/ShowProvider"
import HomeCards from "./HomeCards"
import Search from "./Search"
import "../styles/landscapeCard.scss"
import { BandContext } from "../bands/BandProvider"


const Home = props => {
    const { shows } = useContext(ShowContext)
    const { bands } = useContext(BandContext)
    const [ search, setSearch ] = useState('')

    const dynamicSearch = () => shows.filter(show => {
        if (show.bands.some(band => band.band_name.toLowerCase().includes(search.toLowerCase()))) {
            return true
        } else if (show.venue.venue_name.toLowerCase().includes(search.toLowerCase())) {
            return true
        } else {
            return false
        }
    })


    return (
        <Container>
            <h1 className="text-center">EconoShows</h1>
            <Search setSearch={setSearch} />
            <HomeCards shows={dynamicSearch()} />
        </Container>
    )

}

export default Home

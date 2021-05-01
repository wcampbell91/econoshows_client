import React, { useContext, useEffect, useState } from "react"
import  { ShowContext } from "./ShowProvider"
import { Container, Card, Button, Row, Col } from "react-bootstrap"
import ShowCards from "./ShowCards"
import Search from "../home/Search"

const ShowsList = props => {
    const { shows } = useContext(ShowContext)
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
    
    return(
        <Container className="justify-content-center">
            <h3 className="mb-3" style={{textAlign: "center"}}>Upcoming Jams</h3>
            {(localStorage.getItem("token") !== null) 
            ? <Button variant="primary" className="ml-3 mb-2 primaryButton" style={{textAlign: "center"}}href="/addShow">Add Show</Button>
            : ""}
            <Search setSearch={setSearch} />
            <ShowCards shows={dynamicSearch()} />
        </Container>
    )
}

export default ShowsList

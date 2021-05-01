import React, { useContext, useEffect, useState } from "react"
import { Container, Card, CardDeck, CardColumns } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"
import Search from "../home/Search"
import VenueCards from "./VenueCards"

const VenuesList = props => {
    const { venues } = useContext(VenueContext)
    const [ search, setSearch ] = useState('')

    const dynamicSearch = () => venues && venues.filter((venue) => venue.venue_name.toLowerCase().includes(search.toLowerCase()))
    
    return (
        <Container>
            <h3 style={{textAlign: "center"}} className="mb-3">Venues</h3>
            <Search setSearch={setSearch} />
            <VenueCards venues={dynamicSearch()} />
        </Container>
    )
}

export default VenuesList

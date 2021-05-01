import React, { useContext, useEffect, useState } from "react"
import { Container, Card, CardDeck, CardColumns } from "react-bootstrap"
import SearchField from "react-search-field"
import { BandContext } from "./BandProvider"
import Search from "../home/Search"
import BandCards from "./BandCards"

const BandsList = props => {
    const { bands } = useContext(BandContext)
    const [ search, setSearch ] = useState('')

    const dynamicSearch = () => bands && bands.filter((band) => band.band_name.toLowerCase().includes(search.toLowerCase()))

    return (
        <Container>
            <h3 className="mb-3" style={{textAlign: "center"}}>Bands</h3>
            <Search setSearch={setSearch}/>
            <BandCards bands={dynamicSearch()}/>
        </Container>
    )

}

export default BandsList

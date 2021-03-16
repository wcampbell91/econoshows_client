import React, { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup, CardDeck } from "react-bootstrap"
import { BandContext } from "./BandProvider"
import BandShows from "./BandShows"

const SingleBand = props => {

    const { band, getBand } = useContext(BandContext)

    const { bandId } =  props.match.params

    useEffect(() => {
        getBand(bandId)
    }, [])

    const bandShowCards = band && band.shows ? band.shows.map((show) => <BandShows key={show.id} show={show.show} />) : ''
    
    return(
        <Container>
            <Row>
                <Col>
                    <h3>{band.band_name}</h3>
                    <p>{band.bio}</p>
                    <ListGroup>
                        <ListGroup.Item>Lineup: {band.lineup}</ListGroup.Item>
                        <ListGroup.Item>Genre: {band && band.genre ? band.genre.name : ''}</ListGroup.Item>
                        <ListGroup.Item>Contact: {band && band.user ? band.user.email : ''}</ListGroup.Item>
                        <ListGroup.Item>Website: {band.links}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <h4 style={{textAlign: "center"}}>Shows</h4>
                    <CardDeck>
                        {bandShowCards}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBand

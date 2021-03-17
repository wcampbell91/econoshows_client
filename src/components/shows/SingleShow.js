import React, { useContext, useEffect} from "react"
import {ShowContext} from "./ShowProvider"
import {Container, Row, Col, ListGroup, CardDeck} from "react-bootstrap"
import BandsList from "../bands/BandsList"
import ShowBands from "./ShowBands"

const SingleShow = props => {
    const {show, getShow} = useContext(ShowContext)

    const { showId } = props.match.params
    console.log(showId)

    useEffect(() => {
        getShow(showId)
    }, [])

    const showBandCards = show && show.bands ? show.bands.map((band) => <ShowBands key={band.id} band={band.band} />) : ''

    return (
        <Container>
            <Row>
                <Col>
                    <h3>{show.title}</h3>
                    <p>{show.description}</p>
                    <ListGroup>
                        <ListGroup.Item>When: {show.date}</ListGroup.Item>
                        {show && show.venue ? show.venue.map((venue) => <ListGroup.Item>Venue: {venue.venue.venue_name}</ListGroup.Item> ) : ''}
                        <ListGroup.Item>Doors @ {show.door_time}</ListGroup.Item>
                        <ListGroup.Item>Show @ {show.show_time}</ListGroup.Item>
                        <ListGroup.Item>Cover: {show.cover}</ListGroup.Item>
                        {show && show.is_all_ages ? <ListGroup.Item>All Ages!</ListGroup.Item> : <ListGroup.Item>{"21 & up"}</ListGroup.Item>}
                        {show && show.author ? <ListGroup.Item>Created By: {show.author.first_name} {show.author.last_name}</ListGroup.Item> : ''}
                    </ListGroup>
                </Col>
                <Col>
                    <CardDeck>
                        {showBandCards}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleShow

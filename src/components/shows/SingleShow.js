import React, { useContext, useEffect} from "react"
import {ShowContext} from "./ShowProvider"
import {Container, Row, Col, ListGroup, CardDeck, Button} from "react-bootstrap"
import BandsList from "../bands/BandsList"
import ShowBands from "./ShowBands"

const SingleShow = props => {
    const {show, getShow} = useContext(ShowContext)

    const { showId } = props.match.params

    const userId = parseInt(localStorage.getItem("user_id"))

    useEffect(() => {
        getShow(showId)
    }, [])

    const showBandCards = show && show.bands ? show.bands.map((band) => <ShowBands key={band.id} band={band} />) : ''

    return (
        <Container>
            <Row>
                <Col>
                <img src={show.poster} alt="show poster" className="col-12" />
                    <h3 className="mt-2">{show.title}</h3>
                    <p>{show.description}</p>
                    <ListGroup className="listgroup">
                        <ListGroup.Item>When: {show.date}</ListGroup.Item>
                        {show && show.venue ?  <ListGroup.Item>Venue: {show.venue.venue_name}</ListGroup.Item> : ''}
                        <ListGroup.Item>Doors @ {show.door_time}</ListGroup.Item>
                        <ListGroup.Item>Show @ {show.show_time}</ListGroup.Item>
                        <ListGroup.Item>Cover: {show.cover}</ListGroup.Item>
                        {show && show.is_all_ages ? <ListGroup.Item>All Ages!</ListGroup.Item> : <ListGroup.Item>{"21 & up"}</ListGroup.Item>}
                        {show && show.author ? <ListGroup.Item>Created By: {show.author.first_name} {show.author.last_name}</ListGroup.Item> : ''}
                    </ListGroup>
                </Col>
                <Col>
                    {showBandCards}
                </Col>
            </Row>
            { show && show.author && (userId === show.author.id ) ? <Button className="mt-4 offset-5 mr-2 primaryButton" variant="primary" href={`/editShow/${show.id}`}>Update Show</Button> : ""}
            { show && show.author && (userId === show.author.id ) ? <Button className="mt-4 dangerButton" variant="danger" href={`/deleteShow/${showId}`}>Delete Show</Button> : ""}
        </Container>
    )
}

export default SingleShow

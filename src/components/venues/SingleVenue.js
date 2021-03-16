import React, { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"
import VenueShows from "./VenueShows"

const SingleVenue = props => {

    const { venue, getVenue } = useContext(VenueContext)
    
    const { venueId } = props.match.params

    useEffect(() => {
        getVenue(venueId)
    }, [])

    const venueShowCards = venue && venue.shows ? venue.shows.map((show) => <VenueShows key={show.id} show={show.show} />) : ''
    
    return(
        <Container>
            <Row>
                <Col>
                    <h3>{venue.venue_name}</h3>
                    <p>{venue.description}</p>
                    <ListGroup>
                        <ListGroup.Item>Address: {venue.address}</ListGroup.Item>
                        <ListGroup.Item>Booking Info: {venue.bookingInfo}</ListGroup.Item>
                        <ListGroup.Item>Website: {venue.website}</ListGroup.Item>
                        <ListGroup.Item>All Ages?  {venue && venue.is_all_ages ? "Yes" : "No"}</ListGroup.Item>
                        <ListGroup.Item>Backline? {venue && venue.has_backline ? "Yes" : "No"}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <h4 style={{textAlign: "center"}}>Shows</h4>
                    {venueShowCards}
                </Col>
            </Row>
        </Container>
    )
}

export default SingleVenue

import React, { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup, CardDeck, Button } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"
import VenueShows from "./VenueShows"

const SingleVenue = props => {

    const { venue, getVenue } = useContext(VenueContext)
    
    const { venueId } = props.match.params
    const authVenueId = localStorage.getItem("venue_id")

    useEffect(() => {
        getVenue(venueId)
    }, [])

    const venueShowCards = venue && venue.shows ? venue.shows.map((show) => <VenueShows key={show.id} show={show} />) : ''
    
    return(
        <Container>
            {authVenueId === venueId ? <Button variant="primary" href={`/editVenue/${venueId}`}>Update Profile</Button> : ""}
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
                    <CardDeck>
                        {venueShowCards}
                    </CardDeck>
                    {authVenueId === venueId ? <Button variant="primary" href="/addShow">Add Show</Button> : ""}
                </Col>
            </Row>
        </Container>
    )
}

export default SingleVenue

import React, { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup, CardDeck, Button } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"
import VenueShows from "./VenueShows"
import moment from "moment"

const SingleVenue = props => {

    const { venue, getVenue } = useContext(VenueContext)
    
    const { venueId } = props.match.params
    const authVenueId = localStorage.getItem("venue_id")

    useEffect(() => {
        getVenue(venueId)
    }, [])

    const today = moment().format("YYYY-MM-DD")
    const shows = venue && venue.shows ? venue.shows.filter(show => show.date > today) : ""
    const shows_by_date = shows ? shows.sort((a,b) => (new Date(a.date)) - (new Date(b.date))) : ""

    const venueShowCards = shows_by_date ? shows_by_date.map((show) => <VenueShows key={show.id} show={show} />) : ''
    
    return(
        <Container>
            {authVenueId === venueId ? <Button variant="primary" href={`/editVenue/${venueId}`}>Update Profile</Button> : ""}
            <Row>
                <Col>
                    <img src={venue.photos} alt="profile pic" className="col-12"/>
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
            { authVenueId === venueId ? <Button variant="danger" href={`/deleteVenue/${venueId}`}>Delete Account</Button> : ""}
        </Container>
    )
}

export default SingleVenue

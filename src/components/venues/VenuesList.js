import React, { useContext, useEffect } from "react"
import { Container, Card, CardDeck } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"

const VenuesList = props => {
    const { venues, getVenues } = useContext(VenueContext)

    useEffect(() => {
        getVenues()
        console.log(venues)
    }, [])

    return (
        <Container>
            <CardDeck>
                {
                    venues ? venues.map((venue) => {
                        return <Card>
                            <Card.Img variant="top" src={venue && venue.photos ? venue.photos : ''} />
                            <Card.Body>
                                <Card.Title>{venue.venue_name}</Card.Title>
                                <Card.Link href={`/venues/${venue.id}`}>More Info</Card.Link>
                            </Card.Body>
                        </Card>
                    })
                    : ""
                }
            </CardDeck>
        </Container>
    )
}

export default VenuesList

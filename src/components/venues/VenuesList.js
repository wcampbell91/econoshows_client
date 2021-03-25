import React, { useContext, useEffect } from "react"
import { Container, Card, CardDeck, CardColumns } from "react-bootstrap"
import { VenueContext } from "./VenueProvider"

const VenuesList = props => {
    const { venues, getVenues } = useContext(VenueContext)

    useEffect(() => {
        getVenues()
        console.log(venues)
    }, [])

    return (
        <Container>
            <h3 style={{textAlign: "center"}} className="mb-3">Venues</h3>
            <CardColumns>
                {
                    venues ? venues.map((venue) => {
                        return <Card className="card">
                            <Card.Img variant="top" src={venue && venue.photos ? venue.photos : ''} />
                            <Card.Body>
                                <Card.Title className="card-title">{venue.venue_name}</Card.Title>
                                <Card.Link href={`/venues/${venue.id}`}>More Info</Card.Link>
                            </Card.Body>
                        </Card>
                    })
                    : ""
                }
            </CardColumns>
        </Container>
    )
}

export default VenuesList

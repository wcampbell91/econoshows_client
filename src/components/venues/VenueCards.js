import { Card, Button, Container, CardColumns } from "react-bootstrap"

const VenueCards = props => {
    const { venues } = props

    return (
        <Container className="cardContainer">
            <CardColumns className="venues mt-4">
                {
                    venues && venues.map((venue) => {
                        return <Card className="card">
                                    <Card.Img variant="top" src={venue && venue.photos ? venue.photos : ''} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{venue.venue_name}</Card.Title>
                                        <Card.Link href={`/venues/${venue.id}`}>More Info</Card.Link>
                                    </Card.Body>
                                </Card>
                    })
                }
            </CardColumns>
        </Container>
    )
}

export default VenueCards

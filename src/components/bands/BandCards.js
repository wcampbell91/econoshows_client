import { Card, Button, Container, CardColumns } from "react-bootstrap"

const BandCards = props => {
    const { bands } = props

    return (
        <Container className="cardContainer">
            <CardColumns className="bands mt-4">
                {
                    bands && bands.map((band) => {
                        return <Card className="card">
                            <Card.Img variant="top" src={band.photos} />
                            <Card.Body>
                                <Card.Title className="card-title">{band.band_name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{band && band.genre ? band.genre.name : ""} </Card.Subtitle>
                                <Card.Link href={`/bands/${band.id}`}>More Info</Card.Link>
                            </Card.Body>
                        </Card>
                    })
                }
            </CardColumns>
        </Container>
    )
}

export default BandCards

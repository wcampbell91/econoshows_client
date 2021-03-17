import React, { useContext, useEffect } from "react"
import  { ShowContext } from "./ShowProvider"
import { Container, Card, CardDeck, Button } from "react-bootstrap"

const ShowsList = props => {
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
    }, [])

    return(
        <Container className="justify-content-center">
            <Button variant="primary" className="mb-2" style={{textAlign: "center"}}href="/addShow">Add Show</Button>
            <CardDeck>
                {shows ? shows.map((show) => {
                    return <Card key={show.id}>
                                <Card.Img variant="top" src={show && show.poster ? show.poster : ''} />
                                <Card.Body>
                                    <Card.Title>{show.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{show.date}</Card.Subtitle>
                                    <Card.Text>{show && show.venue ? show.venue.venue_name : ''}</Card.Text>
                                    <Card.Link href={`/shows/${show.id}`}>More Info</Card.Link>
                                </Card.Body>
                            </Card>
                })
                : ''}
            </CardDeck>
        </Container>
    )
}

export default ShowsList

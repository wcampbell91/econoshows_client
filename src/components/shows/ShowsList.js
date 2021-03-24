import React, { useContext, useEffect } from "react"
import  { ShowContext } from "./ShowProvider"
import { Container, Card, Button, Row, Col } from "react-bootstrap"

const ShowsList = props => {
    const { shows, getShows } = useContext(ShowContext)

    useEffect(() => {
        getShows()
    }, [])

    return(
        <Container className="justify-content-center">
            <h3 className="mb-3" style={{textAlign: "center"}}>Upcoming Jams</h3>
            {(localStorage.getItem("token") !== null) 
            ? <Button variant="primary" className="mb-2" style={{textAlign: "center"}}href="/addShow">Add Show</Button>
            : ""}
                {shows ? shows.map((show) => {
                    return <Card key={show.id} className="mb-2">
                                <Row className="landscapeHomeCard">
                                    <Col>
                                        <Card.Img className="landscapeHomeImg" variant="top" src={show && show.poster ? show.poster : ''} />
                                    </Col>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title>{show.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{show.date}</Card.Subtitle>
                                            <Card.Text>{show && show.venue ? show.venue.venue_name : ''}</Card.Text>
                                            <Card.Link href={`/shows/${show.id}`}>More Info</Card.Link>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                })
                : ''}
        </Container>
    )
}

export default ShowsList

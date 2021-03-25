import React from "react"
import { Card, Row, Col } from "react-bootstrap"

const BandShows = props => {
    const { show } = props  

    return (
            <Card className="mb-2 card">
                <Row className="no-gutters landscapeShowCard">
                    <Col>
                        <Card.Img className="landscapeShowImg" variant="top" src={show && show.poster ? show.poster : ''} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="card-title">{show ? show.title : ""}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{show ? show.date : ''}</Card.Subtitle>
                            {show && show.venue ? <Card.Text>{show.venue.venue_name}</Card.Text> : ''}
                            <Card.Link href={`/shows/${show.id}`}>More Info</Card.Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    )
}


export default BandShows

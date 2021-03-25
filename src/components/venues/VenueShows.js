import React from "react"
import { Card, Row, Col } from "react-bootstrap"

const VenueShows = props => {
    const { show } = props  

    return (
            <Card className="mb-2 card">
                <Row className="no-gutters landscapeShowCard">
                    <Col>
                        <Card.Img className="landscapeShowImg" variant="top" src={show.poster ? show.poster : ''} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="card-title">{show.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{show.date}</Card.Subtitle>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    )
}


export default VenueShows

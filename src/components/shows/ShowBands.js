import React from "react"
import { Card, Row, Col } from "react-bootstrap"

const ShowBands = props => {
    const { band } = props

    return (
        <Card className="mb-2 card">
            <Row className="no-gutters landscapeShowCard">
                <Col>
                    <Card.Img className="landscapeShowImg" variant="top" src={band && band.photos ? band.photos : ''} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title className="card-title">{band.band_name}</Card.Title>
                        <Card.Link href={`/bands/${band.id}`}>More Info</Card.Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ShowBands

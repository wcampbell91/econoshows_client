import React from "react"
import { Card } from "react-bootstrap"

const ShowBands = props => {
    const { band } = props

    return (
        <Card>
            <Card.Img variant="top" src={band && band.photos ? band.photos : ''} />
            <Card.Title>{band.band_name}</Card.Title>
            <Card.Link href={`/bands/${band.id}`}>More Info</Card.Link>
        </Card>
    )
}

export default ShowBands

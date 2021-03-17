import React from "react"
import { Card } from "react-bootstrap"

const BandShows = props => {
    const { show } = props  

    return (
            <Card>
                <Card.Img variant="top" src={show.photos ? show.photos : ''} />
                <Card.Body>
                    <Card.Title>{show.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{show.date}</Card.Subtitle>
                    {show && show.venue ? show.venue.map((venue) => <Card.Text>{venue.venue.venue_name}</Card.Text>) : ''}
                </Card.Body>
            </Card>
    )
}


export default BandShows

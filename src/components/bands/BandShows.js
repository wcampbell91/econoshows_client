import React from "react"
import { Card } from "react-bootstrap"

const BandShows = props => {
    const { show } = props  

    return (
            <Card>
                <Card.Img variant="top" src={show && show.poster ? show.poster : ''} />
                <Card.Body>
                    <Card.Title>{show ? show.title : ""}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{show ? show.date : ''}</Card.Subtitle>
                    {show && show.venue ? <Card.Text>{show.venue.venue_name}</Card.Text> : ''}
                </Card.Body>
            </Card>
    )
}


export default BandShows

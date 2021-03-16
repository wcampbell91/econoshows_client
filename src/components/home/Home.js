import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {Container, Card} from "react-bootstrap"
import  { ShowContext } from "../shows/ShowProvider"


const Home = props => {
    const { shows, getShows } = useContext(ShowContext)
    
    useEffect(() => {
        getShows()
    }, [])

    return (
        <Container>
            {shows ? shows.map((show) => {
                return <Card className="mb-3">
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
        </Container>
    )

}

export default Home

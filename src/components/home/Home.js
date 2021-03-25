import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {Container, Card, Row, Col} from "react-bootstrap"
import  { ShowContext } from "../shows/ShowProvider"
import "../styles/landscapeCard.scss"


const Home = props => {
    const { shows, getShows } = useContext(ShowContext)
    
    useEffect(() => {
        getShows()
    }, [])

    return (
        <Container>
            <h1 className="text-center">EconoShows</h1>
            {shows ? shows.map((show) => {
                return <Card className="mb-3 card">
                            <Row className="no-gutters landscapeHomeCard">
                                <Col className="md-col-4">
                                    <Card.Img className="landscapeHomeImg" variant="top" src={show && show.poster ? show.poster : ''} />
                                </Col>
                                <Col className="md-col-8">
                                    <Card.Body>
                                        <Card.Title className="card-title">{show.title}</Card.Title>
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

export default Home

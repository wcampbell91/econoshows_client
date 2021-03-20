import React, { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup, CardDeck, Button } from "react-bootstrap"
import { BandContext } from "./BandProvider"
import BandShows from "./BandShows"
import moment from "moment"
import { string } from "prop-types"

const SingleBand = props => {

    const { band, getBand, deleteBand } = useContext(BandContext)

    const { bandId } =  props.match.params

    const authBandId = localStorage.getItem("band_id")

    useEffect(() => {
        getBand(bandId)
    }, [])

    const today = moment().format("YYYY-MM-DD")
    console.log(today)
    const showsByDate = band && band.shows ? band.shows.filter((show) => show.date > today) : "" 
    const sortedShowsByDate = showsByDate ? showsByDate.sort((a,b) => a.date - b.date) : ""
    console.log(sortedShowsByDate)
    const bandShowCards = showsByDate ? showsByDate.map((show) => <BandShows key={show.id} show={show} />) : ''
    
    return(
        <Container className="justify-content-center">
            { authBandId === bandId ? <Button className="mr-auto" variant="primary" href={`/editBand/${bandId}`}>Update Profile</Button> : ""}
            <Row>
                <Col>
                    <h3>{band.band_name}</h3>
                    <p>{band.bio}</p>
                    <ListGroup>
                        <ListGroup.Item>Lineup: {band.lineup}</ListGroup.Item>
                        <ListGroup.Item>Genre: {band && band.genre ? band.genre.name : ''}</ListGroup.Item>
                        <ListGroup.Item>Contact: {band && band.user ? band.user.email : ''}</ListGroup.Item>
                        <ListGroup.Item>Website: {band.links}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <h4 style={{textAlign: "center"}}>Shows</h4>
                    <CardDeck>
                        {bandShowCards}
                    </CardDeck>
                    { authBandId === bandId ? <Button className="mt-2" style={{textAlign: "center"}} variant="primary" href="/addShow">Add A Show</Button> : ""}
                </Col>
            </Row>
            { authBandId === bandId ? <Button variant="danger" href={`/deleteBand/${bandId}`}>Delete Account</Button> : ""}
        </Container>
    )
}

export default SingleBand

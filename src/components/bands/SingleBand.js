import React, { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup, CardDeck, Button } from "react-bootstrap"
import { BandContext } from "./BandProvider"
import BandShows from "./BandShows"
import moment from "moment"

const SingleBand = props => {

    const { band, getBand, deleteBand } = useContext(BandContext)

    const { bandId } =  props.match.params

    const authBandId = localStorage.getItem("band_id")

    useEffect(() => {
        getBand(bandId)
    }, [])

    const today = moment().format("YYYY-MM-DD")
    const shows = band && band.shows ? band.shows.filter(show => show.date > today) : ""
    const shows_by_date = shows ? shows.sort((a,b) => (new Date(a.date)) - (new Date(b.date))) : ""
    const bandShowCards = shows_by_date ? shows_by_date.map((show) => <BandShows key={show.id} show={show} />) : ""

    return(
        <Container className="justify-content-center">
            <Row>
                <Col className="md-col-4">
                    <h4 className="mb-2" style={{textAlign: "center"}}>{band.band_name}</h4>
                    <img className="mb-2 col-12" src={band.photos} alt="profile pic" />
                    <p className="mt-2" style={{}}>{band.bio}</p>
                    <ListGroup className="listgroup">
                        <ListGroup.Item>Lineup: {band.lineup}</ListGroup.Item>
                        <ListGroup.Item>Genre: {band && band.genre ? band.genre.name : ''}</ListGroup.Item>
                        <ListGroup.Item>Contact: {localStorage.getItem("token") && band.user ? band.user.email : "log in to view"}</ListGroup.Item>
                        <ListGroup.Item>Website: {band.links}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="md-col-8">
                    <h4 style={{textAlign: "center"}}>Shows</h4>
                    {bandShowCards}
                    { authBandId === bandId ? <Button className="mt-2 primaryButton" style={{textAlign: "center"}} variant="primary" href="/addShow">Add A Show</Button> : ""}
                </Col>
            </Row>
            { authBandId === bandId ? <Button variant="danger" className="mt-4 mr-2 offset-5 dangerButton" href={`/deleteBand/${bandId}`}>Delete Account</Button> : ""}
            { authBandId === bandId ? <Button className="mt-4 primaryButton" variant="primary" href={`/editBand/${bandId}`}>Update Profile</Button> : ""}
        </Container>
    )
}

export default SingleBand

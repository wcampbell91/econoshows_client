import React, {useContext, useEffect, useState} from "react"
import { ShowContext } from "./ShowProvider"
import { VenueContext } from "../venues/VenueProvider"
import { BandContext } from "../bands/BandProvider"
import OpenerComponent from "./OpenerComponent"
import { Form, Container, Col, Button } from "react-bootstrap"

const UpdateShow = props => {
    const { createShow, getShow, show, updateShow } = useContext(ShowContext)
    const { getVenues, venues } = useContext(VenueContext)
    const { getBands, bands } = useContext(BandContext)

    const [ currentShow, setCurrentShow ] = useState({
        author: "",
        title: "",
        description: "",
        door_time: "",
        show_time: "",
        cover: "",
        date: "",
        poster: "",
        venue: 1,
        bands: []
    })


    const userId = localStorage.getItem("user_id")

    const { showId } = props.match.params

    useEffect(() => {
        getVenues()
    }, [])

    useEffect(() => {
        getBands()
    }, [])

    
    useEffect(() => {
        // If show is being edited 
            getShow(showId)
            .then(show => {
                    setCurrentShow({
                        author: userId,
                        title: show.title,
                        description: show.description,
                        door_time: show.door_time,
                        show_time: show.show_time,
                        cover: show.cover,
                        date: show.date,
                        poster: show.poster,
                        venue: show.venue[0].venue.id,
                        bands: show.bands
                    })
                    })         
        
    }, [props.match.params.showId])



    const handleChange = e => {
        const newShowState = Object.assign({}, currentShow)
        const checkedBands = []
        if(e.target.name !== "bands") {
            newShowState[e.target.name] = e.target.value
        } else {
            const checkeds = document.getElementsByName("bands")
            for (let i=0; i < checkeds.length; i++) {
                if (checkeds[i].name !== "nope") {
                    const band = parseInt(checkeds[i].value)
                    checkedBands.push(band)
                } else {
                    return
                }
            }
            const bands = checkedBands.filter(band => band !== 0)
            newShowState["bands"] = bands
        }
        setCurrentShow(newShowState)
    }


    return (
        <Container>
            <Form className="col-6 offset-3">
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control defaultValue={currentShow.title} name="title" type="text" onChange={handleChange}/>
                </Form.Group>

                <Form.Row>
                    <Col>
                        <Form.Group  controlId="door_time">
                            <Form.Label>Door Time</Form.Label>
                            <Form.Control defaultValue={currentShow.door_time} name="door_time" placeholder="eg. 8:00 PM" type="text" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="show_time">
                            <Form.Label>Show Time</Form.Label>
                            <Form.Control defaultValue={currentShow.show_time} name="show_time" placeholder="eg. 8:00 PM" type="text" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="cover">
                            <Form.Label>Cover</Form.Label>
                            <Form.Control defaultValue={currentShow.cover} name="cover" placeholder="eg. $5" type="text" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control defaultValue={currentShow.date} name="date" type="date" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Venue</Form.Label>
                    <Form.Control name="venue" as="select" onChange={handleChange}>
                        {currentShow && currentShow.venue ? <option value={currentShow.venue.id}>{currentShow.venue.venue_name}</option> : ""}
                        {venues ? venues.map((venue) => <option value={venue.id}>{venue.venue_name}</option>): ""}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Show Description</Form.Label>
                    <Form.Control defaultValue={currentShow.description} name="description" as="textarea" rows={5} onChange={handleChange}/>
                </Form.Group>
                <h3>Bands on Bill:</h3>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>1.</Form.Label>
                                <Form.Control name="bands" as="select" onChange={handleChange}>
                                    {/* {"showId" in props.match.params ? <option value={currentShow.bands[0]}>{currentShow.bands[0].band.band_name}</option> : <option value="0" name="nope">None</option>} */}
                                    {bands ? bands.map((band) => <option value={band.id}>{band.band_name}</option>): ""}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>2.</Form.Label>
                                <Form.Control name="bands" as="select" onChange={handleChange}>
                                    {/* {"showId" in props.match.params ? <option value={currentShow.bands[1].band.id}>{currentShow.bands[1].band.band_name}</option> : <option value="0" name="nope">None</option>} */}
                                    {bands ? bands.map((band) => <option value={band.id}>{band.band_name}</option>): ""}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>3.</Form.Label>
                            <Form.Control name="bands" as="select" onChange={handleChange}>
                            {/* {"showId" in props.match.params ? <option value={currentShow.bands[2].band.id}>{currentShow.bands[2].band.band_name}</option> : <option value="0" name="nope">None</option>} */}
                                {bands ? bands.map((band) => <option value={band.id}>{band.band_name}</option>): ""}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>4.</Form.Label>
                            <Form.Control name="bands" as="select" onChange={handleChange}>
                                {/* {"showId" in props.match.params && show.bands[3] ? <option value={show.bands[3].band.id}>{show.bands[3].band.band_name}</option> : <option value="0" name="nope">None</option>} */}
                                {bands ? bands.map((band) => <option value={band.id}>{band.band_name}</option>): ""}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                    <Button className="justify-content-center" variant="primary" onClick={e => {
                        const updatedShow = {
                            id: showId,
                            author: parseInt(userId),
                            title: currentShow.title,
                            description: currentShow.description,
                            door_time: currentShow.door_time,
                            show_time: currentShow.show_time,
                            cover: currentShow.cover,
                            date: currentShow.date,
                            // poster: "",
                            venue: parseInt(currentShow.venue),
                            bands: currentShow.bands
                        }
                        updateShow(updatedShow)
                        .then(() => props.history.push("/shows"))
                    }}>Update Show</Button>
            </Form>
        </Container>
    )
}

export default UpdateShow

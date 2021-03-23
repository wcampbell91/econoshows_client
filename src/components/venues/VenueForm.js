import React, { useState, useContext, useEffect } from "react"
import { createRef, useRef } from "react"
import { Link } from "react-router-dom"
import { Form, Col, Button } from "react-bootstrap"
import { VenueContext } from "../venues/VenueProvider"
import bsCustomFileInput from "bs-custom-file-input"

const VenueForm = props => {
    const { getVenue, venue, updateVenue } = useContext(VenueContext)
    const [ isAllAges, setIsAllAges ] = useState(false)
    const [ hasBackline, setHasBackline ] = useState(false)
    const fileInput = React.createRef()
    const [ currentVenue, setCurrentVenue ] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        venue_name: "",
        website: "",
        is_all_ages: "",
        has_backline: "",
        description: "",
        booking_info: "",
        photos: "",
        address: "",
    })

    const updateIsAllAges = e => setIsAllAges(!isAllAges)
    const updateHasBackline = e => setHasBackline(!hasBackline)

    const { venueId } = props.match.params

    useEffect(() => {
        bsCustomFileInput.init()
        getVenue(venueId) 
            .then((venue) => {
                setCurrentVenue({
                    username: venue.user.username,
                    email: venue.user.email,
                    first_name: venue.user.first_name,
                    last_name: venue.user.last_name,
                    venue_name: venue.venue_name,
                    website: venue.website,
                    is_all_ages: venue.is_all_ages,
                    has_backline: venue.has_backline,
                    description: venue.description,
                    booking_info: venue.booking_info,
                    photos: venue.photos ? venue.photos : '',
                    address: venue.address,
                })
            })
    }, [])

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const handleChange = e => {
        const newVenueState = Object.assign({}, currentVenue)
        if (e.target.name !== "photos") {
            newVenueState[e.target.name] = e.target.value
        } else if (e.target.name === "photos") {
            getBase64(fileInput.current.files[0], (base64ImageString) => {
                newVenueState["photos"] = base64ImageString
            })
        }
        setCurrentVenue(newVenueState)
    }

    return (
        <div className="justify-content-center">
            <h3 className="text-center mb-4">Update your information</h3>
            <Form className="col-6 offset-3">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control defaultValue={currentVenue.username} name="username" type="text"onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control defaultValue={currentVenue.email} type="text" name="email" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control defaultValue={currentVenue.first_name} type="text" name="first_name" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control defaultValue={currentVenue.last_name} type="text" name="last_name" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="venue_name">
                            <Form.Label>Venue Name</Form.Label>
                            <Form.Control defaultValue={currentVenue.venue_name} type="text" name="venue_name" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control defaultValue={currentVenue.address} type="text" name="address" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="website">
                            <Form.Label>website</Form.Label>
                            <Form.Control defaultValue={currentVenue.website} type="text" name="website" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="booking_info">
                            <Form.Label>Booking Email</Form.Label>
                            <Form.Control defaultValue={currentVenue.booking_info} type="text" name="booking_info" onChange={handleChange}/>
                        </Form.Group>                    
                    </Col>
                </Form.Row>
                <Form.Group controlId="photos" className="custom-file">
                    <Form.Label>Upload Profile Photo</Form.Label>
                    <Form.File type="file" className="custom-file-label" name="photos" ref={fileInput} id="inputGroupFile01" label="choose file..." onChange={handleChange} custom />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control defaultValue={currentVenue.description} as="textarea" rows={5} name="description" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="is_all_ages">
                    <Form.Label>Is this an all ages venue?</Form.Label>
                    { 
                        currentVenue.is_all_ages 
                            ? <Form.Check inline checked name="allAges" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateIsAllAges} /> 
                            : <Form.Check inline name="allAges" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateIsAllAges} /> 
                    }
                    {
                        currentVenue.is_all_ages
                            ? <Form.Check inline name="allAges" type="radio" className="ml-3 mr-3" label="No" onChange={updateIsAllAges} /> 
                            : <Form.Check checked inline name="allAges" type="radio" className="ml-3 mr-3" label="No" onChange={updateIsAllAges} /> 
                    }
                </Form.Group>
                <Form.Group controlId="has_backline">
                    <Form.Label>Do you provide backline?</Form.Label>
                    { 
                        currentVenue.has_backline 
                            ? <Form.Check inline checked name="backline" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateHasBackline} /> 
                            : <Form.Check inline name="backline" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateHasBackline} /> 
                    }
                    {
                        currentVenue.has_backline
                            ? <Form.Check inline name="backline" type="radio" className="ml-3 mr-3" label="No"   onChange={updateHasBackline} /> 
                            : <Form.Check checked inline name="backline" type="radio" className="ml-3 mr-3" label="No"  onChange={updateHasBackline} /> 
                    }
                </Form.Group>

                <Button className="justify-content-center" variant="primary" onClick={e => {
                    e.preventDefault();
                    const updatedVenue = {
                        id: parseInt(venueId),
                        username: currentVenue.username,
                        email: currentVenue.email,
                        first_name: currentVenue.first_name,
                        last_name: currentVenue.last_name,
                        venue_name: currentVenue.venue_name,
                        website: currentVenue.website,
                        is_all_ages: isAllAges,
                        has_backline: hasBackline,
                        description: currentVenue.description,
                        booking_info: currentVenue.booking_info,
                        photos: currentVenue.photos,
                        address: currentVenue.address,
                    }
                    updateVenue(updatedVenue)
                    .then(() => props.history.push(`/venues/${venueId}`))
                }}>Update</Button>
            </Form>
        </div>
    )
}

export default VenueForm

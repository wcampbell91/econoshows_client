import React, { useState, useContext, useEffect } from "react"
import { createRef, useRef } from "react"
import { Link } from "react-router-dom"
import { Form, Col, Button } from "react-bootstrap"
import { VenueContext } from "../venues/VenueProvider"

const RegisterVenue = props => {
    const { registerVenue } = useContext(VenueContext)
    const [ isAllAges, setIsAllAges ] = useState(false)
    const [ hasBackline, setHasBackline ] = useState(false)

    const username = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef() 
    const email = React.createRef()
    const first_name = React.createRef()
    const last_name = React.createRef()
    const venue_name = React.createRef()
    const website = React.createRef()
    const is_all_ages = React.createRef()
    const has_backline = React.createRef()
    const description = React.createRef()
    const booking_info = React.createRef()
    const address = React.createRef()

    const updateIsAllAges = e => setIsAllAges(!isAllAges)
    const updateHasBackline = e => setHasBackline(!hasBackline)


    const handleRegister = e => {
        e.preventDefault();
        
        if (password.current.value === verifyPassword.current.value) {
            const newVenue = {
                "username": username.current.value,
                "email": email.current.value,
                "password": password.current.value,
                "first_name": first_name.current.value,
                "last_name": last_name.current.value,
                "venue_name": venue_name.current.value,
                "website": website.current.value,
                "photos": "",
                "is_all_ages": isAllAges,
                "has_backline": hasBackline,
                "description": description.current.value,
                "booking_info": booking_info.current.value,
                "user_type": "venue",
                "address": address.current.value
            }
            
            return registerVenue(newVenue)
                    .then(res => res.json())
                    .then(res => {
                        if ("token" in res) {
                            localStorage.setItem("token", res.token)
                            localStorage.setItem("user_id", res.id)
                            props.history.push("/")
                        }
                    })
        } else {
            passwordDialog.current.ShowModal()
        }
    }

    return (
        <div className="justify-content-center">
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <h3 className="text-center mb-4">Register your venue with EconoShows</h3>

            <Form className="col-6 offset-3" onSubmit={handleRegister}>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control ref={username} type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={email} type="text"/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group  controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={password} type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="verifyPassword">
                            <Form.Label>Verify Password</Form.Label>
                            <Form.Control ref={verifyPassword} type="text"/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control ref={first_name} type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control ref={last_name} type="text"/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="venue_name">
                            <Form.Label>Venue Name</Form.Label>
                            <Form.Control ref={venue_name} type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control ref={address} type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="website">
                            <Form.Label>website</Form.Label>
                            <Form.Control ref={website} type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="booking_info">
                            <Form.Label>Booking Email</Form.Label>
                            <Form.Control ref={booking_info} type="text" />
                        </Form.Group>                    
                    </Col>
                </Form.Row>
                <Form.Group controlId="description">
                    <Form.Label>description</Form.Label>
                    <Form.Control ref={description} as="textarea" rows={5} />
                </Form.Group>
                <Form.Group controlId="is_all_ages">
                    <Form.Label>Is this an all ages venue?</Form.Label>
                    { 
                        isAllAges 
                            ? <Form.Check inline checked name="allAges" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateIsAllAges} /> 
                            : <Form.Check inline name="allAges" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateIsAllAges} /> 
                    }
                    {
                        isAllAges
                            ? <Form.Check inline name="allAges" type="radio" className="ml-3 mr-3" label="No" onChange={updateIsAllAges} /> 
                            : <Form.Check checked inline name="allAges" type="radio" className="ml-3 mr-3" label="No" onChange={updateIsAllAges} /> 
                    }
                </Form.Group>
                <Form.Group controlId="has_backline">
                    <Form.Label>Do you provide backline?</Form.Label>
                    { 
                        hasBackline 
                            ? <Form.Check inline checked name="backline" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateHasBackline} /> 
                            : <Form.Check inline name="backline" type="radio" className="ml-3 mr-3" label="Yes" onChange={updateHasBackline} /> 
                    }
                    {
                        hasBackline
                            ? <Form.Check inline name="backline" type="radio" className="ml-3 mr-3" label="No" ref={has_backline} value={true} onChange={updateHasBackline} /> 
                            : <Form.Check checked inline name="backline" type="radio" className="ml-3 mr-3" label="No" ref={has_backline} value={false} onChange={updateHasBackline} /> 
                    }
                </Form.Group>

                <Button className="justify-content-center" variant="primary" type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default RegisterVenue

import React, { useState, useContext, useEffect } from "react"
import { createRef, useRef } from "react"
import { Link } from "react-router-dom"
import { Form, Col, Button } from "react-bootstrap"
import { GenreContext } from "../GenreProvider"
import { BandContext } from "../bands/BandProvider"

const RegisterBand = props => {
    const username = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef() 
    const email = React.createRef()
    const first_name = React.createRef()
    const last_name = React.createRef()
    const band_name = React.createRef()
    const genre = React.createRef()
    const lineup = React.createRef()
    const links = React.createRef()
    const bio = React.createRef()

    const { getGenres, genres } = useContext(GenreContext)

    const { registerBand } = useContext(BandContext)

    useEffect(() => {
        getGenres()
    }, [])


    const handleRegister = e => {
        e.preventDefault();
        
        if (password.current.value === verifyPassword.current.value) {
            const newBand = {
                "username": username.current.value,
                "email": email.current.value,
                "password": password.current.value,
                "first_name": first_name.current.value,
                "last_name": last_name.current.value,
                "band_name": band_name.current.value,
                "genre": genre.current.value,
                "lineup": lineup.current.value,
                "photos": "",
                "links": links.current.value,
                "bio": bio.current.value,
                "user_type": "band"
            }
            
            return registerBand(newBand)
                    .then(res => res.json())
                    .then(res => {
                        if ("token" in res) {
                            localStorage.setItem("token", res.token)
                            localStorage.setItem("user_id", res.id)
                            localStorage.setItem("band_id", res.band_id)
                            props.history.push(`/bands/${res.band_id}`)
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

            <h3 className="text-center mb-4">Register your band with EconoShows</h3>

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
                        <Form.Group controlId="band_name">
                            <Form.Label>Band Name</Form.Label>
                            <Form.Control ref={band_name} type="text"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="genre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control ref={genre} as="select">
                                {genres ?  genres.map((genre) => <option value={genre.id}>{genre.name}</option>) : ''}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="lineup">
                            <Form.Label>Line up</Form.Label>
                            <Form.Control ref={lineup} type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="links">
                            <Form.Label>Website</Form.Label>
                            <Form.Control ref={links} type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group controlId="bio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control ref={bio} as="textarea" rows={5} />
                </Form.Group>

                <Button className="justify-content-center" variant="primary" type="submit">Register</Button>

            </Form>
        </div>
    )
}

export default RegisterBand

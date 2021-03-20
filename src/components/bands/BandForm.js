import React, { useState, useContext, useEffect } from "react"
import { createRef, useRef } from "react"
import { Link } from "react-router-dom"
import { Form, Col, Button } from "react-bootstrap"
import { GenreContext } from "../GenreProvider"
import { BandContext } from "../bands/BandProvider"

const BandForm = props => {
    const { getBand, band, updateBand } = useContext(BandContext)
    const { getGenres, genres } = useContext(GenreContext)
    const passwordDialog = React.createRef()
    const verifyPassword = React.createRef()

    const [ currentBand, setCurrentBand ] = useState({
        username: "",
        // password: "", 
        passwordDialog: "",  
        email: "", 
        first_name: "",
        last_name: "", 
        band_name: "",
        genre: "", 
        lineup: "", 
        links: "", 
        bio: "" 
    })

    const { bandId } = props.match.params

    useEffect(() => {
        getGenres()
        getBand(bandId)
            .then((band) => {
                setCurrentBand({
                    username: band.user.username,
                    // password: band.user.password, 
                    email: band.user.email, 
                    first_name: band.user.first_name,
                    last_name: band.user.last_name, 
                    band_name: band.band_name,
                    genre: band.genre, 
                    lineup: band.lineup, 
                    links: band.links, 
                    bio: band.bio
                })
            })
    }, [])


    const handleChange = e => {        
        const newBandState = Object.assign({}, currentBand)
        if (e.target.name !== "genre") {
            newBandState[e.target.name] = e.target.value
        } else {
            const genre = JSON.parse(e.target.value)
            newBandState["genre"] = genre
        }
        setCurrentBand(newBandState)
    }

    return (
        <div className="justify-content-center">
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <h3 className="text-center mb-4">Update your information</h3>

            <Form className="col-6 offset-3">
                <Form.Row>
                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control defaultValue={currentBand.username} name="username" type="text" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control defaultValue={currentBand.email} type="text" name="email" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                {/* <Form.Row>
                    <Col>
                        <Form.Group  controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control defaultValue={currentBand.password} type="text" name="password" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="verifyPassword">
                            <Form.Label>Verify Password</Form.Label>
                            <Form.Control ref={verifyPassword} type="text"/>
                        </Form.Group>
                    </Col>
                </Form.Row> */}
                <Form.Row>
                    <Col>
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control defaultValue={currentBand.first_name} type="text" name="first_name" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control defaultValue={currentBand.last_name} type="text" name="last_name" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="band_name">
                            <Form.Label>Band Name</Form.Label>
                            <Form.Control defaultValue={currentBand.band_name} type="text" name="band_name" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="genre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control name="genre" as="select" selected={currentBand.genre.id} onChange={handleChange}>
                                {currentBand && currentBand.genre ? <option value={currentBand.genre.id}>{currentBand.genre.name}</option> : ""}
                                {genres ?  genres.map((genre) => <option value={JSON.stringify(genre)}>{genre.name}</option>) : ''}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="lineup">
                            <Form.Label>Line up</Form.Label>
                            <Form.Control defaultValue={currentBand.lineup} type="text" name="lineup" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="links">
                            <Form.Label>Website</Form.Label>
                            <Form.Control defaultValue={currentBand.links} type="text" name="links" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group controlId="bio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control defaultValue={currentBand.bio} as="textarea" rows={5} name="bio" onChange={handleChange}/>
                </Form.Group>

                <Button className="justify-content-center" variant="primary" onClick={e => {
                    e.preventDefault();
                        const updatedBand = {
                            id: parseInt(bandId),
                            username: currentBand.username,
                            email: currentBand.email, 
                            // password: currentBand.password, 
                            first_name: currentBand.first_name,
                            last_name: currentBand.last_name, 
                            band_name: currentBand.band_name,
                            genre: currentBand.genre.id, 
                            lineup: currentBand.lineup, 
                            // photos: "",
                            links: currentBand.links, 
                            bio: currentBand.bio,
                            user_type: "band"
                        }
                        updateBand(updatedBand)
                        .then(() => props.history.push(`/bands/${bandId}`))
                }}>Update</Button>

            </Form>
        </div>
    )
}

export default BandForm

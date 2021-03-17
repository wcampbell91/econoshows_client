import React from "react"
import { Form } from "react-bootstrap"


const OpenerComponent = props => {
    const { bands } = props
    return (
        <Form.Group>
            <Form.Label>Opener</Form.Label>
            <Form.Control name="opener" as="select">
                {bands ? bands.map((band) => <option value={band.id}>{band.band_name}</option>): ""}
            </Form.Control>
        </Form.Group>
    )
}

export default OpenerComponent

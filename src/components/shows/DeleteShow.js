import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { ShowContext } from "./ShowProvider"


const DeleteShow = props => {
    const { deleteShow } = useContext(ShowContext)
    const { showId } = props.match.params
    return (
        <div className="container justify-content-center">
            <h3 className="text-center">Are you sure you want to delete this show?</h3>
            <Button variant="danger" onClick={e => {
                deleteShow(showId)
                .then(() => {
                    props.history.push('/shows')
                })
            }}>Yes</Button>
            <Button variant="secondary" onClick={e => props.history.push(`/shows/${showId}`)}>No</Button>
        </div>
    )
}

export default DeleteShow

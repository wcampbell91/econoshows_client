import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { BandContext } from "./BandProvider"


const DeleteBand = props => {
    const { deleteBand } = useContext(BandContext)
    const { bandId } = props.match.params
    return (
        <div className="container justify-content-center">
            <h3 className="text-center">Are you sure you want to delete your profile?</h3>
            <Button variant="danger" className="dangerButton" onClick={e => {
                deleteBand(bandId)
                .then(() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user_id")
                    localStorage.removeItem("band_id")
                    props.history.push('/bands')
                })
            }}>Yes</Button>
            <Button variant="secondary" onClick={e => props.history.push(`/bands/${bandId}`)}>No</Button>
        </div>
    )
}

export default DeleteBand

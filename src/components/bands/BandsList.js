import React, { useContext, useEffect } from "react"
import { Container, Card, CardDeck, CardColumns } from "react-bootstrap"
import { BandContext } from "./BandProvider"

const BandsList = props => {
    const { bands, getBands } = useContext(BandContext)

    useEffect(() => {
        getBands()
    }, [])

    

    return (
        <Container>
            <h3 className="mb-3" style={{textAlign: "center"}}>Bands</h3>
                <CardColumns>
                    {
                        bands ? bands.map((band) => {
                            return <Card>
                                <Card.Img variant="top" src={band.photos} />
                                <Card.Body>
                                    <Card.Title>{band.band_name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{band && band.genre ? band.genre.name : ""} </Card.Subtitle>
                                    <Card.Link href={`/bands/${band.id}`}>More Info</Card.Link>
                                </Card.Body>
                            </Card>
                        })
                        : ''
                    }
                </CardColumns>
        </Container>
    )

}

export default BandsList

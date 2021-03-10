import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import  { ShowContext } from "../shows/ShowProvider";
import HomeShowCard from "./HomeShowCard";


const Home = props => {
    const { shows, getShows } = useContext(ShowContext)
    
    useEffect(() => {
        getShows()
    }, [])

    const showCards = shows ? shows.map((show) => <HomeShowCard {...props} key={show.id} show={show} />) : ''

    return (
        <div className="home-container">
            <h1>EconoShows</h1>
            <div>
                { showCards }
            </div>
        </div>
    )

}

export default Home

import React from "react"
import { Route } from "react-router-dom"

import BandProvider from "./bands/BandProvider"
import BandsList from "./bands/BandsList"
import SingleBand from "./bands/SingleBand"

import VenueProvider from "./venues/VenueProvider"
import VenuesList from "./venues/VenuesList"
import SingleVenue from "./venues/SingleVenue"

import ShowProvider from "./shows/ShowProvider"
import ShowsList from "./shows/ShowsList"
import SingleShow from "./shows/SingleShow"

import GenreProvider from "./GenreProvider"

import Home from "./home/Home"
import  Login  from "./auth/Login"
import  Register from "./auth/Register"
import RegisterBand from "./auth/RegisterBand"
import RegisterVenue from "./auth/RegisterVenue"

import NavBar from "./nav/NavBar"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <GenreProvider>
                <BandProvider>
                    <VenueProvider>
                        <ShowProvider>
                            <Route render={props => <NavBar {...props} />} />
                            <Route exact path="/" render={props => <Home {...props} />} />
                            <Route exact path="/login" render={props => <Login {...props} />} />
                            <Route exact path="/register" render={props => <Register {...props} />} />
                            <Route exact path="/registerBand" render={props => <RegisterBand {...props} />} />
                            <Route exact path="/registerVenue" render={props => <RegisterVenue {...props} />} />
                            <Route exact path="/bands/:bandId(\d+)" render={props => <SingleBand {...props} />} />
                            <Route exact path="/venues/:venueId(\d+)" render={props => <SingleVenue {...props} />} />
                            <Route exact path="/bands" render={props => <BandsList {...props} />} />
                            <Route exact path="/venues" render={props => <VenuesList {...props} />} />
                            <Route exact path="/shows" render={props => <ShowsList {...props} />} />
                            <Route exact path="/shows/:showId(\d+)" render={props => <SingleShow {...props} />} />
                        </ShowProvider> 
                    </VenueProvider>
                </BandProvider>
            </GenreProvider>
        </main>
    </>
}

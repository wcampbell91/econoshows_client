import React from "react"
import { Route } from "react-router-dom"

import BandProvider from "./bands/BandProvider"
import BandsList from "./bands/BandsList"
import SingleBand from "./bands/SingleBand"
import BandForm from "./bands/BandForm"

import VenueProvider from "./venues/VenueProvider"
import VenuesList from "./venues/VenuesList"
import SingleVenue from "./venues/SingleVenue"
import VenueForm from "./venues/VenueForm"

import ShowProvider from "./shows/ShowProvider"
import ShowsList from "./shows/ShowsList"
import SingleShow from "./shows/SingleShow"
import ShowForm from "./shows/ShowForm"
import UpdateShow from "./shows/UpdateShow"

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

                            <Route exact path="/venues" render={props => <VenuesList {...props} />} />
                            <Route exact path="/registerVenue" render={props => <RegisterVenue {...props} />} />
                            <Route exact path="/venues/:venueId(\d+)" render={props => <SingleVenue {...props} />} />
                            <Route exact path="/editVenue/:venueId(\d+)" render={props => <VenueForm {...props} />} />

                            <Route exact path="/bands" render={props => <BandsList {...props} />} />
                            <Route exact path="/registerBand" render={props => <RegisterBand {...props} />} />
                            <Route exact path="/bands/:bandId(\d+)" render={props => <SingleBand {...props} />} />
                            <Route exact path="/editBand/:bandId(\d+)" render={props => <BandForm {...props} />} />

                            <Route exact path="/shows" render={props => <ShowsList {...props} />} />
                            <Route exact path="/shows/:showId(\d+)" render={props => <SingleShow {...props} />} />
                            <Route exact path="/addShow" render={props => <ShowForm {...props} />} />
                            <Route exact path="/editShow/:showId(\d+)" render={props => <ShowForm {...props} />} />
                        </ShowProvider> 
                    </VenueProvider>
                </BandProvider>
            </GenreProvider>
        </main>
    </>
}

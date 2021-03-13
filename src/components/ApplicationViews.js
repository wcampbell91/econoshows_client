import React from "react"
import { Route } from "react-router-dom"
import BandProvider from "./bands/BandProvider"

import VenueProvider from "./venues/VenueProvider"

import ShowProvider from "./shows/ShowProvider"

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
                        </ShowProvider>
                    </VenueProvider>
                </BandProvider>
            </GenreProvider>
        </main>
    </>
}

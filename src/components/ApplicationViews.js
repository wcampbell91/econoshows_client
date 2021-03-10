import React from "react"
import { Route } from "react-router-dom"
import BandProvider from "./bands/BandProvider"

import VenueProvider from "./venues/VenueProvider"

import ShowProvider from "./shows/ShowProvider"

import Home from "./home/Home"
import  Login  from "./auth/Login"
import  Register from "./auth/Register"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
        }}>
            <BandProvider>
                <VenueProvider>
                    <ShowProvider>
                        <Route exact path="/" render={props => <Home {...props} />} />
                        <Route exact path="/login" render={props => <Login {...props} />} />
                        <Route exact path="/register" render={props => <Register {...props} />} />
                    </ShowProvider>
                </VenueProvider>
            </BandProvider>
        </main>
    </>
}

import React from "react"
import { Route } from "react-router-dom"
import BandProvider from "./bands/BandProvider"

import VenueProvider from "./venues/VenueProvider"

import ShowProvider from "./shows/ShowProvider"

import  Login  from "./auth/Login"
import  Register from "./auth/Register"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <BandProvider>
                <VenueProvider>
                    <ShowProvider>
                        <Route exact path="/login" render={props => <Login {...props} />} />
                        <Route exact path="/register" render={props => <Register {...props} />} />
                    </ShowProvider>
                </VenueProvider>
            </BandProvider>
            {/* <GameProvider>
                <Route exact path="/" render={props => <GameList {...props} />} />
                <Route exact path="/games/new" render={props => <GameForm {...props} />} />
                <Route exact path="/games/:gameId(\d+)/edit" render={props => <GameForm {...props} />} />
                <EventProvider>
                    <Route exact path="/events"render={props => <EventList {...props}/>} />
                    <Route exact path="/events/new"render={props => <EventForm {...props}/>} />
                </EventProvider>
            </GameProvider>
            <ProfileProvider>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </ProfileProvider> */}
        </main>
    </>
}

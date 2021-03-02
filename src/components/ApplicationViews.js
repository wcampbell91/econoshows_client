import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
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

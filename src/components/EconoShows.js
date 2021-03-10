import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import  Login  from "./auth/Login"
import  Register from "./auth/Register"

export const EconoShows = () => (
    <>
        <Route render={NavBar} />
        <Route render={props => <ApplicationViews {...props} />} />
    </>
)

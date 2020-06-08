import { Route } from "react-router-dom";
import React from "react"

// Moods
import Home from "./Home/Home"
import NavBar from './NavBar/NavBar'

const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;
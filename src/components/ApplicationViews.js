import { Route } from "react-router-dom";
import React from "react"

// Moods
import Welcome from "./Welcome/Welcome"
import Register from "./Register/Register"
import Login from "./Login/Login"

const ApplicationViews = (props) => {
    // User
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    return <Welcome {...props}/>;
                }}
            />
            <Route
                exact
                path="/register"
                render={props => {
                    return <Register setUser={setUser} {...props}/>;
                }}
            />
            <Route
                exact
                path="/login"
                render={props => {
                    return <Login setUser={setUser} {...props}/>;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;
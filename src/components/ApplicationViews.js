import { Route } from "react-router-dom";
import React from "react"

// Moods
import Welcome from "./Welcome/Welcome"
import Register from "./Register/Register"

const ApplicationViews = (props) => {
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
                    console.log(props)
                    return <Register setUser={setUser} {...props}/>;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;
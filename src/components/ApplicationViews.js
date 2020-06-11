import { Route, Redirect } from "react-router-dom";
import React from "react"

// Moods
import Welcome from "./Welcome/Welcome"
import Register from "./Register/Register"
import Login from "./Login/Login"
import Messages from "./Messages/Messages"

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
                    return <Welcome {...props} />;
                }}
            />
            <Route
                exact
                path="/register"
                render={props => {
                    return <Register setUser={setUser} {...props} />;
                }}
            />
            <Route
                exact
                path="/login"
                render={props => {
                    return <Login setUser={setUser} {...props} />;
                }}
            />
            <Route exact path="/messages" render={props => {
                if (hasUser) {
                    return <Messages {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
        </React.Fragment>
    );
};

export default ApplicationViews;
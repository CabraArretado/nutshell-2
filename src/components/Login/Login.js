import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Jumbotron,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from 'reactstrap';

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        let stateToChange = {...credentials};
        stateToChange[e.target.id] = e.target.value;
        console.log(stateToChange)
        setCredentials(stateToChange)
    }

    const handleLogin = (e) => {
            e.preventDefault();
            props.setUser(credentials)
            console.log(credentials)
            props.history.push("/");
    }

    return <>
        <Jumbotron className="container mt-5">
            <h1 className="display-3">Log In</h1>
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input onChange={handleChange} type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup className="col-6">
                    <Label for="confirmationInput">Confirm password</Label>
                    <Input type="password" name="confirmation" id="confirmationInput" placeholder="Confirm your password" />
                </FormGroup>
                <Button type="submit" className="">Register</Button>
            </Form>
        </Jumbotron>
    </>
}

export default Login
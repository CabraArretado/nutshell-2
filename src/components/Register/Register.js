import React, {useState}from 'react';
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

// moods
import API from "../../modules/GeneralModule"

const Register = (props) => {

    const [credentials, setCredentials] = useState({ username: "" , email: "", password: "" });
    const [confirmation, setConfirmation] = useState(null);

    // Handle changes in the username, email, password
    const handleChange = (e) => {
        let stateToChange = {...credentials};
        stateToChange[e.target.id] = e.target.value;
        console.log(stateToChange)
        setCredentials(stateToChange)
    }

    // Handle password cofirmation changes
    const handleConfirmation = (e) => {
        let stateToChange = confirmation;
        stateToChange = e.target.value;
        setConfirmation(stateToChange)
    }

    // Register the user and log him in
    const handleRegister = (e) => {
        e.preventDefault();
        createUser(credentials);
        props.setUser(credentials)
        console.log(credentials)
        props.history.push("/");
    }

    // TODO Register the use in the DB
    const createUser = (obj) => {
        if (!obj.username && !obj.password && !obj.email) {alert("Please, provide all the information in order to create a account")}
        else if (obj.password !== confirmation) {alert("Password and confirmation don't match")}
        else {
            API.post("users", obj)
        }
    }

    return <>
        <Jumbotron className="container mt-5">
            <h1 className="display-3">Register Account</h1>
            <Form onSubmit={handleRegister}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input onChange={handleChange} type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input onChange={handleChange} type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <div className="form-row">
                    <FormGroup className="col-6">
                        <Label for="password">Password</Label>
                        <Input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label for="confirmationInput">Confirm password</Label>
                        <Input onChange={handleConfirmation} type="password" name="confirmation" id="confirmationInput" placeholder="Confirm your password" />
                    </FormGroup>
                </div>
                <Button type="submit" className="">Register</Button>
            </Form>
        </Jumbotron>
    </>
};

export default Register;
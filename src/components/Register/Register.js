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

const Register = (props) => {

    const [credentials, setCredentials] = useState({ email: "", username: "", password: "" });

    const handleChange = (e) => {
        let tempo = {...credentials};
        tempo[e.target.id] = e.target.value;
        setCredentials(tempo)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        createUser(credentials);
        props.setUser(credentials)
        console.log(credentials)
        props.history.push("/");
    }

    const createUser = (obj) => {
        //todo
        console.log("todo")
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
                        <Input type="password" name="confirmation" id="confirmationInput" placeholder="Confirm your password" />
                    </FormGroup>
                </div>
                <Button type="submit">Register</Button>
            </Form>
        </Jumbotron>
    </>
};

export default Register;
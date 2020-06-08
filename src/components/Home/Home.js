import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./Home.css"

const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Welcome to NutShell!</h1>
                <p className="lead">Here you can conect with your friends and family!</p>
                <hr className="my-2" />

                <div className="form-row">
                    <div className="col">
                        <p className="lead">
                            Are you new here?
                        </p>
                        <Button color="primary">Register</Button>
                    </div>
                    <div className="col">
                        <p className="lead">
                            Already have a account?
                        </p>
                        <Button color="primary">Login</Button>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Home;
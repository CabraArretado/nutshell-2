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

// moods
import API from "../../modules/GeneralModule"

const Messages = (props) => {

    const user = sessionStorage.getItem('credentials')
    console.log(user)

    const [message, setMessage] = useState({content:"", userId: user.id});
    const [allMessages, setAllMessages] = useState([]);

    // handle changes on the input message
    const handleChange = (e) => {
        let stateToChange = { ...message };
        stateToChange[e.target.id] = e.target.value;
        console.log(stateToChange)
        setMessage(stateToChange)
    }

    // get all messages to load
    const getMessages = async (m) => {
        await setAllMessages(API.getAll("messages"))
        console.log("get working")
    }

    // Enter send the message
    const keyPressed = (e) => e.key === "Enter" ? submitMessage() : null

    // handle the send message
    const submitMessage = (e) => {
        API.post("messages", message)
    }

    return <>
        <div className="container d-flex justify-content-center">
            <Jumbotron className="superbox">
            <h1 className="display-3">Messages</h1>
            <div className="messages" id="messages">
                {/* mesSages api */}
            </div>
            <div className="form-row">
                <Input className="" onKeyPress={keyPressed} onChange={handleChange} type="text" name="" id="content" placeholder="Type a message" />
                <Button onClick={submitMessage}>Send</Button>
            </div>
            </Jumbotron>
        </div>
    </>
}

export default Messages
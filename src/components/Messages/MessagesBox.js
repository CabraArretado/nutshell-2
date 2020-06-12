import React, { useState } from 'react';
import { Link } from "react-router-dom";

const MessageBox = (props) => {
    return <>
    <h5>{props.user.name}:</h5><p>{props.content}</p>
    </>
}
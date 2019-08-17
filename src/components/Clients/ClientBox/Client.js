import React from 'react'

import './Client.scss'

const Client = (props) => (
    <div className="client-container">
        <h1>{props.name} {props.surname}</h1>
    </div>
);

export default Client;
import React from 'react';
import styled from 'styled-components';

import './Button.scss'

const Button = (props) => {

    const Button = styled.button `
        background: transparent;
        borderRadius: 10px;
        padding: 0.25em;
    `
    return ( 
        <Button
            disabled={props.disabled}
            onClick={props.clicked}>
                {props.children}
            </Button>
    );
}
 
export default Button;
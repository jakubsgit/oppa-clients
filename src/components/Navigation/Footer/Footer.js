import React from 'react';

import './Footer.scss';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

const footer = (props) => (
    <footer className="Footer">
        <Container maxWidth='sm'>
            <Typography variant='body1'>LASH maker assistant</Typography>
        </Container>
    </footer>
);

export default footer;

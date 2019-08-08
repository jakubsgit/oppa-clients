import React, { Component } from 'react'

import Aux from '../Aux';
import './Layout.scss';

import Footer from '../../components/Navigation/Footer/Footer';
import Header from '../../components/Navigation/Header/Header';


class Layout extends Component {
    render () {
        return (
            <Aux>
                <Header />
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;
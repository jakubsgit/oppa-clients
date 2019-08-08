import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../Login/Login';

class ClientsMaker extends Component {
    render() {
        return (
            <div>
            {this.props.isAut ? "" : <Login />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clients: state.cients,
        isAut: state.isAutenth,
    }
}



export default connect (mapStateToProps)(ClientsMaker);
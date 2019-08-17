import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import axios from '../../axios.clients'

import {connect} from 'react-redux';

import Clients from '../../components/Clients/Clients'
import Button from '../../components/UI/Button/Button'

class ClientsMaker extends Component {

    state = {
        purchasing: false,
        loading: false,
        error: false
    }


    addClientHandler = () => {
        const name = this.props.name.concat()
        axios.post('/clients.json', name)
        .then(response => {
            console.log(response.data)
            this.setState({loading: false})
        }).catch(error => {
            this.setState({loading: false})
        })
    }

    render() {
        return (

            <Aux>
                <Clients />
                <div className="input-group">
                    <label htmlFor="clientname">
                        Imię klienta
                    </label>
                    <input 
                    type="text" 
                    name="clientname" 
                    placeholder="imię klienta"
                    onSubmit={this.addClientHandler}    
                    />
                    <Button
                    clicked={this.addClientHandler}
                    >Dodaj klienta</Button>
                </div>
            </Aux>            
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        isAut: state.isAutenth,
    }
}





export default connect (mapStateToProps)(ClientsMaker);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

class LoginBox extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            errors: [],
            username: "",
            password: "",
        };
    }
    showValidationError = (elm, msg) => {
        this.setState((prevState) => ({
            errors: [...prevState.errors, { elm, msg }]
        }));
    }
    clearValidationError = (elm) => {
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if(elm !== err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr}
        });
    }

    onAuthHandler = () => {
        this.props.onAutHandler()
    }

    onUsernameChange = (e) => {
        this.setState({username: e.target.value});
        this.clearValidationError("username")
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
        this.clearValidationError("password")
    }
    submitLogin = (event) => {
        if (this.state.username === "") {
            this.showValidationError("username", "Nazwa uzytkownika nie moze być pusta")
        } if (this.state.password === "") {
            this.showValidationError("password", "Hasło nie moze być puste")
        } if (this.state.username === "mari" && this.state.password === "kochana") {
            this.onAuthHandler();
        }
    }
    render () {

        let usernameErr = null, passwordErr = null;
        
        for (let err of this.state.errors) {
            if (err.elm === "username") {
                usernameErr = err.msg;
            } if (err.elm === "password") {
                passwordErr = err.msg;
            }
        }

        return (
            <div className="inner-container">
                <div className="header">
                    Panel logowania
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">
                            Nazwa uzytkownika
                        </label>
                        <input 
                        className="login-input" 
                        type="text" 
                        name="username" 
                        placeholder="nazwa uzytkownika"
                        onChange={this.onUsernameChange.bind(this)}    
                        />
                        <small className="danger-error">{usernameErr? usernameErr : ""}</small>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">
                            Hasło
                        </label>
                        <input 
                        className="login-input" 
                        type="password" 
                        name="password" 
                        placeholder="hasło"
                        onChange={this.onPasswordChange.bind(this)}
                        />
                        <small className="danger-error">{passwordErr? passwordErr : ""}</small>
                    </div>
                    <botton 
                    type="button" 
                    className="login-btn" 
                    onClick={this.submitLogin.bind(this)}>
                    Zaloguj się</botton>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        isAut: state.isAutenth,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAutHandler: () => dispatch({type: actionTypes.TOGGLE_AUTH})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
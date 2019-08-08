import React, { Component } from 'react';
import '../../sass/_loginSty.scss';

import LoginBox from './LoginBox/LoginBox'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: true
        };
    }

    showLoginBox = () => {
        const isLoginOpen = this.state.isLoginOpen;
        this.setState({isLoginOpen: !isLoginOpen})
    }

    render() {
        return (
          <div className="root-container">
                <div className="box-controller">
                    <div 
                    onClick={this.showLoginBox.bind(this)}
                    className={" controller " + (this.state.isLoginOpen ? "selected-controller" : "")}>
                        Login
                    </div>
                </div>
                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox />}
                </div>
          </div>  
        );
    }
}

export default Login;

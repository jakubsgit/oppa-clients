import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    }
}
export const authSuccess = (token, userID) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userID
    };
};
export const authError = (error) => {
    return {
        type: actionTypes.AUTH_ERROR,
        error: error
    }
}
export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}
export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
        };
        
    }
}


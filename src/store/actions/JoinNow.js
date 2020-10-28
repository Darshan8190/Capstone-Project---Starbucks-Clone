import axios from 'axios'

import * as actionTypes from './actionTypes'

export const signupAuthStart = () => {
    return {
        type: actionTypes.SIGNUP_AUTH_START
    }
}

export const signupAuthSuccess = (idtoken,userId) => {
    return {
        type: actionTypes.SIGNUP_AUTH_SUCCESS,
        idToken : idtoken,
        userId : userId
    }

}
export const signupAuthFailed = (error) => {
    return {
        type: actionTypes.SIGNUP_AUTH_FAILED,
        error : error
    }
}

export const logoutFromSignUp = () => {
    return {
        type : actionTypes.SIGNUP_AUTH_LOGOUT
    }
}

export const checkSignupTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logoutFromSignUp())
        },expirationTime * 1000)
    }
}

export const signupAuth = (email, password) => {
    return dispatch => {
        dispatch(signupAuthStart());
        const signupData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxgWTSvujmet-5hxDuiH5zdyE1lCO1YnM", signupData)
            .then(response => {
                console.log(response);
                dispatch(signupAuthSuccess(response.data.idToken,response.data.localId))
                dispatch(checkSignupTimeout(response.data.expiresIn))
            })
            .catch(error => {
                console.log(error);
                dispatch(signupAuthFailed(error))
            })
    }
}
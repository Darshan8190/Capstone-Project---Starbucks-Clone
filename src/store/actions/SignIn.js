import axios from 'axios'

import * as actionTypes from './actionTypes'

export const loginAuthStart = () => {
    return {
        type: actionTypes.LOGIN_AUTH_START
    }
}

export const loginAuthSuccess = (idToken, userId) => {
    return {
        type: actionTypes.LOGIN_AUTH_SUCCESS,
        idToken: idToken,
        userId: userId

    }
}

export const loginAuthFailed = (error) => {
    return {
        type: actionTypes.LOGIN_AUTH_FAILED,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGIN_AUTH_LOGOUT
    }
}

export const checkSignInTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const loginAuth = (email, password, keepLogIn) => {
    return dispatch => {
        dispatch(loginAuthStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        // first u have to signup and then u can signin otherwise it throws an error
        // kkk@gmail.com
        // kkkkkk
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxgWTSvujmet-5hxDuiH5zdyE1lCO1YnM", authData)
            .then(response => {
                console.log(response);
                dispatch(loginAuthSuccess(response.data.idToken, response.data.localId))
                dispatch(checkSignInTimeout(response.data.expiresIn))
            })
            .catch(err => {
                console.log(err);
                dispatch(loginAuthFailed(err))
            })
    }
}
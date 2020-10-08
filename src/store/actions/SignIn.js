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

export const loginAuth = (email, password, keepLogIn) => {
    return dispatch => {
        dispatch(loginAuthStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxgWTSvujmet-5hxDuiH5zdyE1lCO1YnM", authData)
            .then(response => {
                console.log(response);
                dispatch(loginAuthSuccess(response.data.idToken, response.data.localId))
            })
            .catch(err => {
                console.log(err);
                dispatch(loginAuthFailed(err))
            })
    }
}
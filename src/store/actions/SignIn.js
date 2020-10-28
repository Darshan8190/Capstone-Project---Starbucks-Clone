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

export const logoutFromSignIn = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("expirationDate")
    localStorage.removeItem("userId")
    return {
        type: actionTypes.LOGIN_AUTH_LOGOUT
    }
}

export const checkSignInTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logoutFromSignIn())
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
        // abc007@gmail.com
        // abc007
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxgWTSvujmet-5hxDuiH5zdyE1lCO1YnM", authData)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000))
                localStorage.setItem("token", response.data.idToken)
                localStorage.setItem("expirationDate", expirationDate)
                localStorage.setItem("userId", response.data.localId)

                dispatch(loginAuthSuccess(response.data.idToken, response.data.localId))
                dispatch(checkSignInTimeout(response.data.expiresIn))
            })
            .catch(err => {
                console.log(err);
                dispatch(loginAuthFailed(err))
            })
    }
}

export const authCheckStatus = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (!token) {
            dispatch(logoutFromSignIn())
        }
        else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"))
            if (expirationDate <= new Date()) {
                dispatch(logoutFromSignIn())
            } else {
                const userId = localStorage.getItem('userId')
                dispatch(loginAuthSuccess(token, userId))
                dispatch(checkSignInTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}
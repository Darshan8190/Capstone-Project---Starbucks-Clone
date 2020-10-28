import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGNUP_AUTH_START:
            return updateObject(state, { error: null, loading: true })
        case actionTypes.SIGNUP_AUTH_SUCCESS:
            return updateObject(state, { token: action.idToken, userId: action.userId, error: null, loading: false })
        case actionTypes.SIGNUP_AUTH_FAILED:
            return updateObject(state, { error: action.error, loading: false })
        case actionTypes.SIGNUP_AUTH_LOGOUT:
            return updateObject(state, { token: null, userId: null })
        default:
            return state
    }
}

export default reducer
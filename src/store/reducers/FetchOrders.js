import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    orders: null,
    error: null,
    spinner: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ORDERS_START: return updateObject(state, { orders: null, error: null, spinner: true })
        case actionTypes.FETCH_ORDERS_SUCCESS: return updateObject(state, { orders: action.orders, error: null, spinner: false })
        case actionTypes.FETCH_ORDERS_FAILED: return updateObject(state, { error: action.error, spinner: false })
    }
    return state
}

export default reducer
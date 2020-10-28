import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    }
}

export const initOrders = (token) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        axios.get("https://starbucks-clone-capstone.firebaseio.com/orders.json?auth=" + token)
            .then(response => {
                dispatch(fetchOrderSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchOrderFailed(error))
            })
    }
}
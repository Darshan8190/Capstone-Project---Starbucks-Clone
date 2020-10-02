import * as actionTypes from './actionTypes'
import axios from 'axios'

// synchronous action creator
export const setMenu = (menu) => {
    return {
        type: actionTypes.SET_MENU,
        menu: menu
    }
}

export const fetchMenuFailed = () => {
    return {
        type: actionTypes.FETCH_MENU_FAILED
    }
}

// asynchronous action creator
export const initMenu = () => {
    return dispatch => {
        axios
            .get("https://starbucks-clone-capstone.firebaseio.com/menu.json")
            .then((response) => {
                dispatch(setMenu(response.data))
            })
            .catch(error => {
                dispatch(fetchMenuFailed())
            });
    }
}
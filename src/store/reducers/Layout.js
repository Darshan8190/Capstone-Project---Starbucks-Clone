import * as actionTypes from '../actions/actionTypes'

const initialState = {
    menu: null,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MENU_SUCCESS:
            return {
                ...state,
                menu: action.menu,
                error: false
            }
        case actionTypes.FETCH_MENU_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default reducer
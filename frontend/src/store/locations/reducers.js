import * as types from './constants'

const initialState = {
    locations: [],
    err: {}
}

export default (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case types.FETCH_LOCATIONS:
            return {
                ...state,
                locations: action.payload
            }
        default:
            return state;
    }
}
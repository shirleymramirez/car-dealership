import * as types from './constants'

const initialState = {
    locations: [],
    err: {},
    location: []
}

export default (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case types.FETCH_LOCATIONS:
            return {
                ...state,
                locations: action.payload
            }
        case types.FETCH_A_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case types.POST_A_LOCATION:
            return {
                ...state,
                locations: state.locations.concat([
                    {
                        ...action.payload
                    }
                ])
            }
        default:
            return state;
    }
}
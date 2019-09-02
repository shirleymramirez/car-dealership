import * as types from './constants'

// get all locations 
export const fetchLocations = () => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/locations`)
        const json = await response.json()
        console.log(json)
        dispatch({
            type: types.FETCH_LOCATIONS,
            payload: json
        })
    }
} 

// // get One Location
// export const fetchALocation = () => {
//     return async 
// }
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

// get One Location
export const fetchOneLocation = (location_id) => {
    return async dispatch => {
        // console.log(location_id);
        const response = await fetch(`${types.BASE_URL}/locations/${location_id}`)
        // console.log(response)
        const json = await response.json()
        // console.log(json)
        dispatch({
            type: types.FETCH_A_LOCATION,
            payload: json
        })
    }
}

// add new location
export const postNewLocation = (data) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/locations/new`, {
            method: 'POST',
            body: JSON.stringify({
                address: data.address,
                name: data.name
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        console.log(response);
        const newPostLocationData = await response.json()
        console.log(newPostLocationData);
        dispatch({
            type: types.POST_A_LOCATION,
            payload: newPostLocationData
        })
    }
} 



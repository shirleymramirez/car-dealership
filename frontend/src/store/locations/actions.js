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

// delete a location
export const deleteALocation = (location_id) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/locations/${location_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const newLocationData = await response.json()
        console.log(newLocationData);
        dispatch({
            type: types.DELETE_A_LOCATION,
            payload: newLocationData
        })
    }
}

export const editALocation = (location_id, data) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/locations/edit/${location_id}`, {
            mode: 'cors',
            method: 'PATCH',
            body: JSON.stringify({
                address: data.address,
                name: data.name
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        console.log(response);
        const newlyEdittedLocationData = await response.json()
        console.log(newlyEdittedLocationData);
        dispatch({
            type: types.EDIT_A_LOCATION,
            payload: newlyEdittedLocationData
        })
    }
}

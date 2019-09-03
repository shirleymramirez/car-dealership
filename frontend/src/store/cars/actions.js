import * as types from './constants'

// get all cars 
export const fetchCars = () => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/cars`)
        const json = await response.json()
        console.log(json)
        dispatch({
            type: types.FETCH_CARS,
            payload: json
        })
    }
} 

// get a car 
export const fetchOneCar = (car_id) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/cars/${car_id}`)
        console.log(response);
        const json = await response.json();
        console.log(json)
        dispatch({
            type: types.FETCH_A_CAR,
            payload: json
        })
    }
}

// add a new car 
export const postNewCar = (data) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/cars/new`, {
            method: 'POST',
            body: JSON.stringify({
                vin: data.vin,
                year: data.year,
                make: data.make,
                model: data.model,
                miles: data.miles,
                price: data.price,
                photo_url: data.photo_url,
                location_id: data.location_id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        console.log(response);
        const newPostCarData = await response.json()
        console.log(newPostCarData);
        dispatch({
            type: types.POST_A_CAR,
            payload: newPostCarData
        })
    }
} 

//delete a car from the list
export const deleteACar = (car_id) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/cars/${car_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const newCarData = await response.json()
        console.log(newCarData);
        dispatch({
            type: types.DELETE_A_CAR,
            payload: newCarData
        })
    }
}

// edit a car information
export const editACar = (car_id, data) => {
    debugger;
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/cars/edit/${car_id}`, {
            mode: 'cors',
            method: 'PATCH',
            body: JSON.stringify({
                vin: data.vin,
                year: data.year,
                make: data.make,
                model: data.model,
                miles: data.miles,
                price: data.price,
                photo_url: data.photo_url,
                location_id: data.location_id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

        })
        console.log(response);
        const newlyEdittedCarData = await response.json()
        console.log(newlyEdittedCarData);
        dispatch({
            type: types.EDIT_A_CAR,
            payload: newlyEdittedCarData
        })
    }
}


// get all cars by location
export const fetchCarsByLocation = (location_id) => {
    return async dispatch => {
        const response = await fetch(`${types.BASE_URL}/cars`)
        const json = await response.json()
        debugger;
        console.log(json)
        console.log(location_id);
        const filteredByLocation = json.filter(location => location.location_id == location_id)
        console.log(filteredByLocation)
        dispatch({
            type: types.FETCH_CARS_BY_LOCATION,
            payload: filteredByLocation
        })
    }
} 

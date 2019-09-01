import * as types from './constants'

// get all cars route: /cars
export const fetchCars = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:8080/cars')
        const json = await response.json()
        console.log(json)
        dispatch({
            type: types.FETCH_CARS,
            payload: json
        })
    }
} 

// cars new page route: cars/:car_id
export const fetchOneCar = (car_id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:8080/cars/${car_id}`)
        console.log(response);
        const json = await response.json();
        console.log(json)
        dispatch({
            type: types.FETCH_A_CAR,
            payload: json
        })
    }
}

// cars edit route: /cars/:car_id/edit
export const postNewCar = (data) => {
    return async dispatch => {
        const response = await fetch('http://localhost:8080/cars', {
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
                'Content-Type': 'application/json'
            }
        })
        console.log(response);
        const newPostCarData = await response.json()
        console.log(newPostCarData);
        dispatch({
            type: types.POST_CAR,
            payload: newPostCarData
        })
    }
} 

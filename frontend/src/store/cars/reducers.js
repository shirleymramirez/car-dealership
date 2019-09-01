import * as types from './constants'

const initialState = {
    cars: [],
    err: {},
    car:{}
}

export default (state = initialState, action ) => {
    console.log(action.type)
    switch (action.type) {
        case types.FETCH_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case types.FETCH_A_CAR:
            // const car = {};
            // action.payload.forEach(car => {
            //     if (car[car.car_id]) {
            //         car[car.car_id].push(car)
            //     } else {
            //         car[car.car_id] = []
            //         car[car.car_id].push(car)
            //     }
            // });
            return {
                ...state,
                // cars: car
                car: action.payload
            }
        case types.POST_CAR:
            return {
                ...state,
                cars: state.cars.concat([
                    {
                        ...action.payload
                    }
                ])
            }
    
        default:
            return state;
    }
}
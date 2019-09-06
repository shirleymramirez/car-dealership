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
            return {
                ...state,
                car: action.payload
            }
        case types.POST_A_CAR:
            return {
                ...state,
                cars: state.cars.concat([
                    {
                        ...action.payload
                    }
                ])
            }
        case types.DELETE_A_CAR:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.id)
            };
        case types.EDIT_A_CAR:
            console.log(action.payload)
            return {
                ...state,
                car: action.payload
            }

        case types.FETCH_CARS_BY_LOCATION:
            return {
                ...state,
                cars: action.payload
            }
        default:
            return state;
    }
}
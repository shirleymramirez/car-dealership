import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import authReducer from './auth/reducer'
import carReducer from './cars/reducers'

//import reducers...
const rootReducer = combineReducers({
    auth: authReducer,
    cars: carReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
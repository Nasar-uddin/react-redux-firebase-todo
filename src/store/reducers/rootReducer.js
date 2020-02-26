import {combineReducers} from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    user:userReducer,
    todos:todoReducer
})

export default rootReducer;

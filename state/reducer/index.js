import {combineReducers} from 'redux'
import UserReducer from './userReducer';

const reducers = combineReducers({
    user: UserReducer,
})

export default reducers;
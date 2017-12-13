import { combineReducers } from 'redux'
import counter from './reducers/counter'
import users from './reducers/users'

export default combineReducers({
    counter,
    users
})
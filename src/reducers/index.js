import { combineReducers } from 'redux';
import usersReducers from './usersReducers'
import publicacionesReducers from './publicacionesReduces'
import worksReducers from './worksReducers'


export default combineReducers({
    usersReducers,
    publicacionesReducers,
    worksReducers
})
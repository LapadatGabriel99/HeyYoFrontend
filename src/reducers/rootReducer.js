import { combineReducers } from 'redux'
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import authorizationReducer from './authorizationReducer';
import loggedInReducer from './loggedInReducer';

const rootReducer = combineReducers({
    errorState: errorReducer,
    userState: userReducer,
    authorizationState: authorizationReducer,
    loginState: loggedInReducer
})

export default rootReducer
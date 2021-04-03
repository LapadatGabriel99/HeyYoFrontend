import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import authorizationReducer from './authorizationReducer';
import loggedInReducer from './loggedInReducer';
import complaintReducer from './complaintReducer';
import chatRoomReducer from './chatRoomReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 
                'loginState', 
                'authorizationState',
                'chatRoomState',
                'complaintState']
}

const rootReducer = combineReducers({
    errorState: errorReducer,
    userState: userReducer,
    authorizationState: authorizationReducer,
    loginState: loggedInReducer,
    complaintState: complaintReducer,
    chatRoomState: chatRoomReducer
})

export default persistReducer(persistConfig, rootReducer)
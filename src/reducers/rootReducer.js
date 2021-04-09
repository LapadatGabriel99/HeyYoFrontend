import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import authorizationReducer from './authorizationReducer';
import loggedInReducer from './loggedInReducer';
import complaintReducer from './complaintReducer';
import chatRoomReducer from './chatRoomReducer';
import { CLEAR_ALL_DATA } from '../actions/types';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userState', 
                'loginState', 
                'authorizationState',
                'chatRoomState',
                'complaintState']
}

const appReducer = combineReducers({
    errorState: errorReducer,
    userState: userReducer,
    authorizationState: authorizationReducer,
    loginState: loggedInReducer,
    complaintState: complaintReducer,
    chatRoomState: chatRoomReducer
})

const emptyState = {
    errorState: {},
    userState: {
        data: {
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            registrationDate: '',
            enabled: '',
            roles: ['']
        }
    },
    authorizationState: {
        authorized: false,
        role: ''
    },
    loginState: false,
    complaintState: {},
    chatRoomState: {
        id: '',
        roomName: '',
        roomNickname: '',
        roomOwner: '',
        createdAt: '',
        listOfMessages: [],
        listOfMembers: []
    }
}

const rootReducer = (state, action) => {
    if(action.type === CLEAR_ALL_DATA) {

        storage.removeItem('persist:root')

        state = emptyState
    }

    return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
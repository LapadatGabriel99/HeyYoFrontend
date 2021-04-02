import { GET_CHATROOM, GET_USER_CHATROOMS, CREATE_CHATROOM } from '../actions/types'

const initialState = {
    chatRoom: {},
    chatRooms: []
}

export default function(state=initialState, action){
    switch(action.type) {

        case GET_CHATROOM:
            return action.payload

        case GET_USER_CHATROOMS:
            return action.payload

        case CREATE_CHATROOM:
            return action.payload

        default:
            return state
    }
}
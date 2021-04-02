import axios from 'axios'
import { CREATE_CHATROOM, GET_CHATROOM, GET_ERRORS, GET_USER_CHATROOMS } from './types'

export const getChatRoom = (roomName, link, history) => async dispatch => {

    try {

        const chatRoom = await axios
            .get(`http://localhost:8080/api/v1.0/chat-room/get-chat-room-details?name=${roomName}`, {

                withCredentials: true
            })

        dispatch({
            type: GET_CHATROOM,
            payload: chatRoom.data
        })

        history.push(link)
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.hasOwnProperty('response') ? error.response.data : error
        })

        history.push('/ErrorPage')
    }
}

export const getUserChatRooms = (user, link, history) => async dispatch => {

    try {

        const userChatRooms = await axios
            .get(`http://localhost:8080/api/v1.0/chat-room/get-user-rooms?name=${user}`, {
                withCredentials: true
            })

        dispatch({
            type: GET_USER_CHATROOMS,
            payload: userChatRooms.data
        })

        history.push(link)
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.hasOwnProperty('response') ? error.response.data : error
        })

        history.push('/ErrorPage')
    }
}

export const createChatRoom = (chatRoom, link, history) => async dispatch => {

    try {

        const response = await axios
            .post('http://localhost:8080/api/v1.0/chat-room/create-chat-room', 
                chatRoom, {

                    withCredentials: true
                })

        dispatch({
            type: CREATE_CHATROOM,
            payload: response.data
        })

        history.push(link)
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.hasOwnProperty('response') ? error.response.data : error
        })

        history.push('/ErrorPage')
    }
}
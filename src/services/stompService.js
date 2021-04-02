import * as SockJS from 'sockjs-client'
import * as Stomp  from 'stompjs'

let stompClient = null;

export const connect = (username, roomId, onMessageReceived) => {

    const socket = new SockJS('http://localhost:8080/heyyo')
    stompClient = Stomp.over(socket)

    stompClient.connect({ headers: {'Content-Type': 'text/plain', }}, 
                        () => onConnected(username, roomId, onMessageReceived),     
                        () => onError())
}

const onConnected = (username, roomId, onMessageReceived) => {

    stompClient.subscribe('/topic/public', onMessageReceived)

    stompClient.send('/app/chat.join', 
                    {},
                    JSON.stringify({
                        sender: username, 
                        content: username + " joined",
                        type: 'CONNECT', 
                        time: Date.now(),
                        roomId: roomId
                    }))
}

const onError = () => {


}

export const send = (sender, roomId, messageContent) => {

    if (messageContent && stompClient) {

        const message = {
            sender: sender,
            content: messageContent,
            type: 'CHAT',
            time: Date.now(),
            roomId: roomId
        }

        stompClient.send('/app/chat.send', {}, JSON.stringify(message))
    }
}
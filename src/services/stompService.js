import * as SockJS from 'sockjs-client'
import * as Stomp  from 'stompjs'

let stompClient = null;

export const connect = (username, onMessageReceived) => {

    const socket = new SockJS('http://localhost:8080/heyyo')
    stompClient = Stomp.over(socket)

    stompClient.connect({ headers: {'Content-Type': 'text/plain', }}, 
                        () => onConnected(username, onMessageReceived),     
                        () => onError())
}

const onConnected = (username, onMessageReceived) => {

    stompClient.subscribe('/topic/public', onMessageReceived)

    stompClient.send('/app/chat.join', 
                    {},
                    JSON.stringify({sender: username, type: 'CONNECT', time: Date.now().toString()}))
}

const onError = () => {


}

export const send = (sender, messageContent) => {

    if (messageContent && stompClient) {

        const message = {
            sender: sender,
            content: messageContent,
            type: 'CHAT',
            time: Date.now().toString()
        }

        stompClient.send('/app/chat.send', {}, JSON.stringify(message))
    }
}
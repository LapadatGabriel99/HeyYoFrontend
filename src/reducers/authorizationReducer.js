import { GET_AUTHORIZATION } from '../actions/types'

const initialState = {
    authorized: false,
    role: ''
}

export default function(state=initialState, action) {
    switch(action.type) {
        
        case GET_AUTHORIZATION:
            return action.payload

        default:
            return state
    }
}
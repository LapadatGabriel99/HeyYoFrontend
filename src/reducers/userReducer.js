import { LOGIN, REGISTER, GET_USERNAME , LOGOUT} from '../actions/types'

const initialState = {
    user: {}
}

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN:
            return action.payload

        case REGISTER:
            return action.payload

        case GET_USERNAME:
            return action.payload

        case LOGOUT:
            return action.payload

        default:
            return state
    }
}
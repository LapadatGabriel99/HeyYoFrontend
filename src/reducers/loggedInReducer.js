import { IS_LOGGEDIN } from '../actions/types'

const initialState = false;

export default function(state=initialState, action) {
    switch(action.type) {

        case IS_LOGGEDIN:
            return action.payload;

        default:
            return state;
    }
}
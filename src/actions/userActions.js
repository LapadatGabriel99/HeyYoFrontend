import axios from 'axios'
import { LOGIN, REGISTER, GET_ERRORS, GET_USERNAME, GET_AUTHORIZATION, LOGOUT, IS_LOGGEDIN } from '../actions/types'

export const login = (userCredentials, history) => async dispatch => {

    try {

        const user = await axios.post(
            'http://localhost:8080/api/v1.0/user/login', 
            userCredentials,{
                withCredentials: true
            })

        dispatch({
            type: LOGIN,
            payload: user
        })

        dispatch({
            type: IS_LOGGEDIN,
            payload: true
        })

        dispatch({
            type: GET_AUTHORIZATION,
            payload: {
                authorized: true,
                role: user.data.roles[0].name
            }
        })

        history.push('/userHub')
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })

        history.push('/ErrorPage')
    }
}

export const register = (userCredentials, history) => async dispatch => {

    try {

        const user = await axios.post('http://localhost:8080/api/v1.0/user/register', userCredentials)
        history.push('/')

        dispatch({
            type: REGISTER,
            payload: user
        })
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })

        history.push('/ErrorPage')
    }
}

export const logout = (history) => async dispatch => {

    try {

        await axios.delete('http://localhost:8080/api/v1.0/user/logout', {
            withCredentials: true
        })

        dispatch({
            type: LOGOUT,
            payload: {

            }
        })

        dispatch({
            type: IS_LOGGEDIN,
            payload: false
        })

        history.push('/')
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.hasOwnProperty('response') ? error.response.data : error
        })

        history.push('/ErrorPage')
    }
}

export const sendPasswordRecoveryEmail = (userEmail, history) => async dispatch => {

    try {

        const user = await axios.post('http://localhost:8080/api/v1.0/user/forgot-password', userEmail)
        history.push('/tokenConfirmation')

        dispatch({
            type: GET_USERNAME,
            payload: user
        })
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })

        history.push('/ErrorPage')
    }
}

export const sendPasswordRecoveryToken = (token, history) => async dispatch => {

    try {

        const result = await axios.get(`http://localhost:8080/api/v1.0/user/reset-password?token=${token}`)

        dispatch({
            type: GET_AUTHORIZATION,
            payload: result
        })        

        history.push('/resetPassword')
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })

        history.push('/ErrorPage')
    }
}

export const updatePassword = (user, history) => async dispatch => {

    try {

        await axios.put('http://localhost:8080/api/v1.0/user/update-password', user)
        history.push('/')
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })

        history.push('/ErrorPage')
    }
}

export const registerComplaint = (complaint, history) => async dispatch => {

    try {

        await axios.post('http://localhost:8080/api/v1.0/user/report-user', complaint,{
            withCredentials: true
        })

        history.push('/postLoginMock')
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.hasOwnProperty('response') ? error.response.data : error
        })

        history.push('/ErrorPage')
    }
}
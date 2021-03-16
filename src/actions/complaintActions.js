import axios from 'axios'
import { GET_CATEGORIES, GET_ERRORS } from './types'

export const getComplaintCategories = (history) => async dispatch => {

    try {

        const categories = await 
                    axios.get
                    ('http://localhost:8080/api/v1.0/category/get-complaint-categories',
                    {
                        withCredentials: true
                    })

        dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        })
    }
    catch (error) {

        dispatch({
            type: GET_ERRORS,
            payload: error.hasOwnProperty('response') ? error.response.data : error
        })

        history.push('/ErrorPage')
    }
}


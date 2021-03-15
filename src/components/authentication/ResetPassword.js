import React from 'react'
import { Avatar, Grid, Paper, TextField, FormControlLabel, Button, Typography, Checkbox, makeStyles, IconButton } from '@material-ui/core'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import { Controls } from '../controls/Controls'
import Form from '../controls/Form';
import { useDispatch, useSelector } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { updatePassword } from '../../actions/userActions'
import { GET_ERRORS } from '../../actions/types';

const useStyles = makeStyles(theme => ({

}))

const isAuthorized = false

const initialFormValues = {
    password: '',
    confirmPassword: ''
}

const ResetPassword = (props) => {
    const paperStyle = {padding: 20, height: '45vh', width: 400, margin: '125px auto'}
    const avatarStyle = {backgroundColor:'green'}
    const buttonStyle = {margin: '35px 0px 20px 0px'}
    const linkStyle = {margin: '25px 0px 10px 0px'}

    const dispatch = useDispatch()

    const classes = useStyles()

    const username = useSelector(state => state.userState)
    const isAuthorized = useSelector(state => state.authorizationState)

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? '' : 'This field is required'
        }

        if ('confirmPassword' in fieldValues) {
            temp.confirmPassword = fieldValues.confirmPassword ? '' : 'This field is required'
        }

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const [ values, 
        setValues, 
        errors, 
        setErrors, 
        handleInputChange, 
        resetForm,
        onBackButtonClick ] = useForm(initialFormValues, true, validate)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(validate()) {

           dispatch(updatePassword({
                'username': username.data.username, 
                'password': values.password
            }, props.history))
        }
    }

    if (isAuthorized.data.authorized === true &&
        isAuthorized.data.role === 'GUEST') {

        return (
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <h2>
                                Reset Password
                            </h2>
                        </Grid>
                        <Controls.Input label='Password' 
                                        name='password'
                                        placeholder='Enter password' 
                                        onChange={handleInputChange} 
                                        error={errors.password}
                                        type='password'
                                        fullWidth 
                                        />
                        <Controls.Input label='Confirm Password'
                                        name='confirmPassword'
                                        placeholder='Re-enter password'
                                        onChange={handleInputChange}
                                        error={errors.confirmPassword}
                                        type='password'
                                        fullWidth
                                        />
                        <Controls.Button type='submit' 
                                         color='primary' 
                                         variant='contained' 
                                         fullWidth
                                         style={buttonStyle}>
                            Submit
                        </Controls.Button>
                        <Controls.Button variant='contained'
                                         color='secondary'
                                         style={linkStyle}
                                         startIcon={<ArrowBackOutlinedIcon/>}
                                         text="Go Back"
                                         onClick={() => onBackButtonClick(props.history, '/')}/>
                    </Paper>
                </Grid>
            </Form>
        )
    }
    else {

        dispatch({
            type: GET_ERRORS,
            payload: "Access denied. Oops! Looks like you don't have permission to this page."
        })

        props.history.push('/errorPage')

        return (<div></div>)
    }
}

export default ResetPassword

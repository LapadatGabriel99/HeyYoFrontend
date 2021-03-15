import React from 'react'
import { Avatar, Grid, Paper, TextField, FormControlLabel, Button, Typography, Checkbox, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import { Controls } from '../controls/Controls'
import Form from '../controls/Form';
import { useDispatch, useSelector } from 'react-redux'
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { sendPasswordRecoveryEmail } from '../../actions/userActions';

const useStyles = makeStyles(theme => ({

}))

const initialFormValues = {
   email: ''
}

const PasswordRecovery = (props) => {
    const paperStyle = {padding: 20, height: '35vh', width: 400, margin: '200px auto'}
    const avatarStyle = {backgroundColor:'green'}
    const buttonStyle = {margin: '30px 0px 20px 0px'}
    const linkStyle = {margin: '15px 0px 10px 0px'}

    const dispatch = useDispatch()

    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'This field is required'
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

            dispatch(sendPasswordRecoveryEmail({
                    email: values.email
                },
                props.history
            ))
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <DraftsOutlinedIcon/>
                        </Avatar>
                        <h2>
                            Enter Email
                        </h2>
                    </Grid>
                    <Controls.Input label='Email'
                                    name='email' 
                                    placeholder='Enter email' 
                                    value={values.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
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

export default PasswordRecovery

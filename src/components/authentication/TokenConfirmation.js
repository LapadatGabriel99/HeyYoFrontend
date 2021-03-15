import React from 'react'
import { Avatar, Grid, Paper, TextField, FormControlLabel, Button, Typography, Checkbox, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import { Controls } from '../controls/Controls'
import Form from '../controls/Form';
import { useDispatch } from 'react-redux'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { sendPasswordRecoveryToken } from '../../actions/userActions';

const useStyles = makeStyles(theme => ({

}))

const initialFormValues = {
   token: ''
}

const TokenConfirmation = (props) => {
    const paperStyle = {padding: 20, height: '35vh', width: 400, margin: '200px auto'}
    const avatarStyle = {backgroundColor:'green'}
    const buttonStyle = {margin: '30px 0px 20px 0px'}
    const linkStyle = {margin: '15px 0px 10px 0px'}

    const dispatch = useDispatch()

    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('token' in fieldValues) {
            temp.token = fieldValues.token ? '' : 'This field is required'
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

            dispatch(sendPasswordRecoveryToken(
                values.token,
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
                            <LockOpenOutlinedIcon/>
                        </Avatar>
                        <h2>
                            Enter Token
                        </h2>
                    </Grid>
                    <Controls.Input label='Token'
                                    name='token' 
                                    placeholder='Enter token' 
                                    value={values.token}
                                    onChange={handleInputChange}
                                    error={errors.token}
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

export default TokenConfirmation

import { Avatar, Grid, Paper, TextField, FormControlLabel, Button, Typography, Checkbox, makeStyles } from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import { Controls } from '../controls/Controls'
import Form from '../controls/Form';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'

const useStyles = makeStyles(theme => ({

}))

const initialFormValues = {
    username: '',
    password: '',
    rememberMe: false
}

const Login = (props) => {
    const paperStyle = {padding: 20, height: '70vh', width: 400, margin: '40px auto'}
    const avatarStyle = {backgroundColor:'green'}
    const checkBoxStyle = {margin: '20px 0px 7px -10px'}
    const buttonStyle = {margin: '20px 0px 20px 0px'}
    const linkStyle = {margin: '10px 0px'}

    const dispatch = useDispatch()

    const classes = useStyles()

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('username' in fieldValues) {
            temp.username = fieldValues.username ? '' : 'This field is required'
        }

        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? '' : 'This field is required'
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
        resetForm ] = useForm(initialFormValues, true, validate)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(validate()) {

            dispatch(login({
                'username': values.username,
                'password': values.password
            }, props.history))
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <h2>
                            Sign In
                        </h2>
                    </Grid>
                    <Controls.Input label='Username'
                                    name='username' 
                                    placeholder='Enter username' 
                                    value={values.username}
                                    onChange={handleInputChange}
                                    error={errors.username}
                                    fullWidth 
                                    />
                    <Controls.Input label='Password' 
                                    name='password'
                                    placeholder='Enter password' 
                                    onChange={handleInputChange} 
                                    error={errors.password}
                                    type='password'
                                    fullWidth 
                                    />
                    <Controls.CheckBox name='rememberMe'
                                       color='primary'
                                       value={values.rememberMe}
                                       onChange={handleInputChange}
                                       label='Remember me'
                                       style={checkBoxStyle}
                                       />
                    <Controls.Button type='submit' 
                                     color='primary' 
                                     variant='contained' 
                                     fullWidth
                                     style={buttonStyle}>
                        Sign in
                    </Controls.Button>
                    <Typography>
                        <Link to='/passwordRecovery'>
                            Forget password ?
                        </Link>
                    </Typography>
                    <Typography style={linkStyle}>
                        <Link to='/register'>
                            Sign up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </Form>
    )
}

export default Login

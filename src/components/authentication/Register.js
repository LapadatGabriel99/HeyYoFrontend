import React from 'react'
import { Avatar, Grid, Paper, TextField, FormControlLabel, Button, Typography, Checkbox } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import { Controls } from '../controls/Controls';
import Form from '../controls/Form';
import { register } from '../../actions/userActions'
import { useDispatch } from 'react-redux'

const initialFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    enabled: false
}

const Register = (props) => {
    const paperStyle = {padding: 20, height: '70vh', width: 400, margin: '40px auto'}
    const avatarStyle = {backgroundColor:'green'}
    const checkBoxStyle = {margin: '20px 0px 7px -10px'}
    const buttonStyle = {margin: '20px 0px 20px 0px'}
    const linkStyle = {margin: '10px 0px'}

    const dispatch = useDispatch()

    const [checked, setChecked] = useState(false)

    const handleCheckboxToggled = (e) => {
        setChecked(checked => !checked)
    }

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('username' in fieldValues) {
            temp.username = fieldValues.username ? '' : 'This field is required'
        }

        if ('email' in fieldValues) {
            temp.email = fieldValues.email ? '' : 'This field is required'
        }


        if ('password' in fieldValues) {
            temp.password = fieldValues.password ? '' : 'This field is required'
        }

        if ('confirmPassword' in fieldValues) {
            temp.confirmPassword = fieldValues.confirmPassword ? '': 'This field is required'
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
            dispatch(register({
                'username': values.username,
                'password': values.password,
                'email': values.email,
                'enabled': values.enabled
            }, props.history))
            
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AccountCircleOutlinedIcon/>
                        </Avatar>
                        <h2>
                            Sign Up
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
                    <Controls.Input label='Email'
                                    name='email' 
                                    placeholder='Enter email' 
                                    value={values.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
                                    fullWidth 
                                    />
                    <Controls.Input label='Password' 
                                    name='password'
                                    placeholder='Enter password'
                                    value={values.password} 
                                    onChange={handleInputChange} 
                                    error={errors.password}
                                    type='password'
                                    fullWidth 
                                    />
                    <Controls.Input label='Confirm Password' 
                                    name='confirmPassword'
                                    placeholder='Re-enter password' 
                                    value={values.confirmPassword}
                                    onChange={handleInputChange} 
                                    error={errors.confirmPassword}
                                    type='password'
                                    fullWidth 
                                    />
                    <Controls.CheckBox name='isAdmin'
                                       color='primary'
                                       value={values.isAdmin}
                                       onChange={handleInputChange}
                                       label='Admin'
                                       style={checkBoxStyle}
                                       />
                    <Controls.Button type='submit' 
                                     color='primary' 
                                     variant='contained' 
                                     fullWidth
                                     style={buttonStyle}>
                        Sign up
                    </Controls.Button>
                    <Typography style={linkStyle}>
                        <Link to='/'>
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </Form>
    )
}

export default Register

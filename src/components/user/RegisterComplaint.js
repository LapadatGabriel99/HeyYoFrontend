import { Avatar, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import { Controls } from '../controls/Controls'
import Form from '../controls/Form'
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        height: '40vh',
        width: 400,
        margin: '200px auto'
    },
    avatar: {
        backgroundColor: 'green'
    },
    submitBtn: {
        margin: '30px 0px 20px 0px'
    },
    backBtn: {
        margin: '15px 0px 10px 0px'
    }
}))

const initialFormValues = {

    issuedBy: '',
    issuedAt: '',
    reason: '',
    categories: []
}

const RegisterComplaint = (props) => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const validate = (fieldValues = values) => {
        let temp = {...errors}

        if ('issuedAt' in fieldValues) {
            temp.issuedAt = fieldValues.issuedAt ? '' : 'This field is required'
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
            
            if (validate()) {
                alert('Submit')

                resetForm()
            }

        }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Paper elevation={10} className={classes.paper}>
                    <Grid align='center'>
                        <Avatar className={classes.avatar}>
                            <DraftsOutlinedIcon/>
                        </Avatar>
                        <h2>
                            Complaint
                        </h2>
                    </Grid>
                    <Controls.Input label='Issued At'
                                    name='issuedAt' 
                                    placeholder='Enter user' 
                                    value={values.issuedAt}
                                    onChange={handleInputChange}
                                    error={errors.issuedAt}
                                    fullWidth 
                                    />
                    <Controls.Input label='Reason'
                                    name='reason'
                                    plachoherd='Enter reason'
                                    value={values.reason}
                                    onChange={handleInputChange}
                                    error={errors.reason}
                                    fullWidth/>
                    <Controls.Button type='submit' 
                                     color='primary' 
                                     variant='contained' 
                                     fullWidth
                                     className={classes.submitBtn}>
                        Submit
                    </Controls.Button>
                    <Controls.Button variant='contained'
                                     color='secondary'
                                     className={classes.backBtn}
                                     startIcon={<ArrowBackOutlinedIcon/>}
                                     text="Go Back"
                                     onClick={() => onBackButtonClick(props.history, '/')}/>
                </Paper>
            </Grid>
        </Form>
    )
}

export default RegisterComplaint

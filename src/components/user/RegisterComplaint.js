import { Avatar, Grid, makeStyles, MenuItem, Paper } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useForm from '../../hooks/useForm'
import { Controls } from '../controls/Controls'
import Form from '../controls/Form'
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { useState } from 'react'
import { useEffect } from 'react'
import { getComplaintCategories } from '../../actions/complaintActions'
import { registerComplaint } from '../../actions/userActions'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 20,
        height: '45vh',
        width: 400,
        margin: '200px auto'
    },
    avatar: {
        backgroundColor: 'green'
    },
    submitBtn: {
        margin: '25px 0px 20px 0px'
    },
    backBtn: {
        margin: '15px 0px 10px 0px'
    },
    select: {
        margin: '30px 0 10px 0px',
        width: 360,
        maxWidth: 360
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

    const currentUser = useSelector(state => state.userState.data.username)

    const convertCategories = () => {

        return category.map(c => ({name: c}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (validate()) {

            dispatch(registerComplaint({
                issuedBy: currentUser,
                issuedAgainst: values.issuedAt,
                reason: values.reason,
                categories: convertCategories()             
            }, props.history))

            setCategory([])

            resetForm()
        }

    }

    const categories = Array.from(useSelector(state => state.complaintState))

    useEffect(() => {
        dispatch(getComplaintCategories(props.history))
    }, [dispatch])

    // TODO: Refactor code block
    const [category, setCategory] = useState([]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

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
                    <Controls.Select label='Category'
                                     value={category}
                                     onChange={handleCategoryChange}
                                     multiple
                                     className={classes.select}>
                        {categories.map((c) => (
                        <MenuItem key={c.id} value={c.name}>
                            {c.name}
                        </MenuItem>
                        ))}
                    </Controls.Select>
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

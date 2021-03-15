import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

const Form = (props) => {
    const classes = useStyles()
    const { children, ...other } = props

    return (
        <form className={classes.root} autoComplete='of' {...other}>
            {children}
        </form>
    )
}

export default Form

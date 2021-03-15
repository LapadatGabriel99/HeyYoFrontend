import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {

    },
    label: {

    }
}))

const Button = (props) => {
    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles()

    return (
        <MuiButton 
                variant={variant || "contained"}
                color={color || "primary"}
                onClick={onClick}
                size={size || "medium"}
                {...other}
                classes={{root:classes.root, label:classes.label}}>
            {text || "Submit"}
        </MuiButton>
    )
}

export default Button

import React from 'react'
import { TextField } from '@material-ui/core'

const Input = (props) => {
    const {name, label, value, placeholder, onChange, error = null, ...other} = props

    return (
        <TextField 
                  label={label}
                  name={name}
                  value={value}
                  placeholder={placeholder}
                  onChange={onChange}
                  {...other}
                  {...(error && {error:true, helperText:error})}/>
    )
}

export default Input

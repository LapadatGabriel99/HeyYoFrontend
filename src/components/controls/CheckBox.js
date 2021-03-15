import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@material-ui/core'
import React from 'react'

const CheckBox = (props) => {
    const { name, label, value, onChange, style, ...other } = props

    const convertToDefaultEventParameter = (name, value) => ({
        target: {
            name: name,
            value: value
        }
    })

    return (
        <FormControl>
            <FormControlLabel control={<MuiCheckBox
                                        name={name}
                                        color="primary"
                                        checked={value}
                                        {...other}
                                        onChange={e => onChange(convertToDefaultEventParameter(name, e.target.checked))}/>}
                              label={label}
                              style={style}/>
        </FormControl>
    )
}

export default CheckBox
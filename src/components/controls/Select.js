import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect } from '@material-ui/core'

const Select = (props) => {
    const {value, onChange, MenuProps, children, label,...other} = props

    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect 
                    value={value}
                    onChange={onChange}
                    MenuProps={MenuProps}
                    {...other}>
                {children}
            </MuiSelect>
        </FormControl>
    )
}

export default Select

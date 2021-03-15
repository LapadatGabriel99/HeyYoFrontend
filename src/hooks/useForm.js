import React, { useState } from 'react'

const useForm = (initialFormValues, validateOnChange = false, validate) => {
    const [values, setValues] = useState(initialFormValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

        if(validateOnChange) {
            validate({[name]: value})
        }
    }

    const onBackButtonClick = (history, to) => {

        history.push(to);
    }

    const resetForm = () => {
        setValues(initialFormValues)
        setErrors({})
    }

    return [
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        onBackButtonClick
    ]
}

export default useForm

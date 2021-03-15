import React from 'react'
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Controls } from '../controls/Controls'

const useStyles = makeStyles(theme => ({

}))

const ErrorPage = (props) => {
    const alertStyle = {margin: '150px auto'}
    const buttonStyle = {width: 100, margin: '-30px 0px 0px 0px'}

    const classes = useStyles()

    const error = useSelector(state => state.errorState)

    const handleOkButtonClick = (history, to) => {

        history.push(to)
    }

    const handleSimpleErrorMessage = (errorMessage) => {

        return (
            <Grid container 
                  direction='column'
                  justify='center'
                  alignItems='center'>
                <Alert severity="error" color="info" style={alertStyle}>
                    <Typography component='div'
                                variant='h4'>
                        {errorMessage}
                    </Typography>
                </Alert>
                <Controls.Button variant='contained'
                                 color='primary'
                                 text='Ok'
                                 size='large'
                                 style={buttonStyle}
                                 onClick={() => handleOkButtonClick(props.history, '/')}/>
            </Grid>
        )
    }

    const handleComplexErrorMessage = (error) => {

        return(
            <Grid container
                  direction='column'
                  justify='center'
                  alignItems='center'>
                <Alert severity="error" style={alertStyle}>
                    {
                        error.map((field, id) => 
                            <Typography component='div' variant='h4'
                                        key={id}>
                                {`${field.toString().replace(',', ': ')}`}
                            </Typography>)
                    }
                </Alert>
                <Controls.Button variant='contained'
                                 color='secondary'
                                 text='Ok'
                                 size='large'
                                 style={buttonStyle}
                                 onClick={() => handleOkButtonClick(props.history, '/')}/>
            </Grid>
        )
    } 

    if (error === null) {

        return handleSimpleErrorMessage('Nothing to show here!')
    }
    else {

        if (typeof error === 'object') {

            if (Object.keys(error).length === 0 && error.constructor === Object) {
                
                return handleSimpleErrorMessage('Nothing to show here!')
            }
            else {
    
                const errors = Object.keys(error).map((key) => [key, error[key]])
            
                return handleComplexErrorMessage(errors)
            }
        }
        else if (typeof error === 'string') {
    
            return handleSimpleErrorMessage(error)
        }
    }
}

export default ErrorPage

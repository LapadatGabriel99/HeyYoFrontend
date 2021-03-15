import { Grid, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Controls } from '../controls/Controls'
import { logout } from '../../actions/userActions'

const PostLoginMock = (props) => {
    const alertStyle = {margin: '150px auto'}
    const buttonStyle = {width: 100, margin: '-30px 0px 0px 0px'}
    const admBtnStyle = {width: 100, margin: '30px 0px 0px 0px'}

    const dispatch = useDispatch()

    const handleOkButtonClick = (history) => {

        dispatch(logout(history))
    }

    const handleAdminButtonClick = (history) => {

        history.push('/postLoginAdminMock')
    }

    return (
        <Grid container 
                  direction='column'
                  justify='center'
                  alignItems='center'>
                <Alert severity="success" color="info" style={alertStyle}>
                    <Typography component='div'
                                variant='h4'>
                        Login successful
                    </Typography>
                </Alert>
                <Controls.Button variant='contained'
                                 color='primary'
                                 text='Logout'
                                 size='large'
                                 style={buttonStyle}
                                 onClick={() => handleOkButtonClick(props.history)}/>
                <Controls.Button variant='contained'
                                 color='primary'
                                 text='Admin'
                                 size='large'
                                 style={admBtnStyle}
                                 onClick={() => handleAdminButtonClick(props.history)}/>
            </Grid>
    )
}

export default PostLoginMock

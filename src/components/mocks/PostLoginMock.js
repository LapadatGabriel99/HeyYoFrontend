import { Grid, makeStyles, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Controls } from '../controls/Controls'
import { logout } from '../../actions/userActions'

const useStyles = makeStyles(theme => ({
    simpleText: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10
    },
    newText: {
        fontSize: 50,
        fontFamily: "'Quicksand', sans-serif"
    }
}))

const PostLoginMock = (props) => {
    const alertStyle = {margin: '150px auto'}
    const buttonStyle = {width: 100, margin: '-30px 0px 0px 0px'}
    const admBtnStyle = {width: 100, margin: '30px 0px 0px 0px'}

    const classes = useStyles()

    const dispatch = useDispatch()

    const handleOkButtonClick = (history) => {

        dispatch(logout(history))
    }

    const handleAdminButtonClick = (history) => {

        history.push('/postLoginAdminMock')
    }

    const handleComplaintButtonClick = (history) => {

        history.push('/registerComplaint')
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
                <Controls.Button variant='contained'
                                 color='primary'
                                 text='Complaint'
                                 size='large'
                                 style={admBtnStyle}
                                 onClick={() => handleComplaintButtonClick(props.history)}/>

                <Typography className={classes.simpleText}>
                    Hello There
                </Typography>
                <Typography className={classes.newText}>
                    Hello There
                </Typography>
            </Grid>
    )
}

export default PostLoginMock

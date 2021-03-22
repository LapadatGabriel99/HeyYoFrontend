import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    joinBtn: {
        
    },
    title: {
        color: theme.palette.primary.main,
        marginBottom: 50
    },
    pageContent: {
        margin: '100px auto',
        paddingTop: 100,
        paddingLeft: 160,
        width: 570,
        height: 360
    }
}))

const Connect = (props) => {
    const classes = useStyles()

    const { chatName, url } = props

    const history = useHistory()

    const onJoinButtonClick = (link, history) => {

        history.push(link)
    }

    return (
        <Paper className={classes.pageContent}>
            <Grid container>
                <Grid align='center'>
                        <Typography variant='h3'
                                    className={classes.title}>
                            {chatName}
                        </Typography>
                        <Button variant='contained'
                                fullWidth
                                className={classes.joinBtn}
                                color='secondary'
                                size='large'
                                onClick={() => 
                                    onJoinButtonClick(`${url}/public/chat`, history)}>
                            Join
                        </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Connect

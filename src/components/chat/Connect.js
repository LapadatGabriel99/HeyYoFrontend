import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    joinBtn: {
        
    },
    title: {
        color: theme.palette.primary.main,
        marginBottom: 50
    }
}))

const Connect = (props) => {
    const classes = useStyles()

    const { chatName } = props

    const onJoinButtonClick = e => {


    }

    return (
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
                        onClick={() => onJoinButtonClick()}>
                    Join
                </Button>
           </Grid>
        </Grid>
    )
}

export default Connect

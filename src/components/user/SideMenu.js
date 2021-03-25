import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        height: '100%',
        width: '250px',
        backgroundColor: theme.palette.primary.dark,
        paddingTop: 90
    },
    sideBtn: {
        opacity: '0.9',
        textAlign: 'center',
        color: '#ffffff',
        marginTop: '40px',
        marginBottom: '40px',
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: '25px',
        border: '2px solid',
        borderColor: theme.palette.primary.light
    }
}))

const SideMenu = (fullProps) => {
    const classes = useStyles()

    const {url, props} = fullProps

    const onButtonClick = (link, history) => {

        history.push(link)
    }

    return (
        <div className={classes.sideMenu}>
            <Button className={classes.sideBtn}
                    color='primary'
                    variant='text'
                    size='large'
                    onClick={() => onButtonClick(url, props.history)}>
                Home
            </Button>
            <Button className={classes.sideBtn}
                    color='primary'
                    variant='text'
                    size='large'
                    onClick={() => onButtonClick(`${url}/public`, props.history)}>
                Public Chat
            </Button>
            <Button className={classes.sideBtn}
                    color='primary'
                    variant='text'
                    size='large'>
                Private Chat
            </Button>
            <Button className={classes.sideBtn}
                    color='primary'
                    variant='text'
                    size='large'>
                Report User
            </Button>
            <Button className={classes.sideBtn}
                    color='primary'
                    variant='text'
                    size='large'>
                Create Chat
            </Button>
        </div>
    )
}

export default SideMenu

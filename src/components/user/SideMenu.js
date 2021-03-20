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
        backgroundColor: theme.palette.primary.dark
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

const SideMenu = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.sideMenu}>
            <Button className={classes.sideBtn}
                    color='primary'
                    variant='text'
                    size='large'>
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
        </div>
    )
}

export default SideMenu

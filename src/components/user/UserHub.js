import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Chat from '../chat/Chat'
import Connect from '../chat/Connect'
import HomePage from './HomePage'
import SideMenu from './SideMenu'

const useStyles = makeStyles(theme => ({
    hubMain: {
        paddingLeft: '250px',
        width: '100%'
    },
    homePageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        height: '85vh'
    },
    publicChatPageContent: {
        margin: '100px auto',
        paddingTop: 100,
        paddingLeft: 160,
        width: 570,
        height: 360 
    },
}))

const UserHub = (props) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <SideMenu {...props}/>
            <div className={classes.hubMain}>
                {/*<Paper className={classes.homePageContent}>
                    <HomePage/>
                </Paper>*/}
                {/*<Paper className={classes.publicChatPageContent}>
                    <Connect chatName='Public Chat'/>
                </Paper>*/}
                <Chat/>
            </div>
        </React.Fragment>
    )
}

export default UserHub

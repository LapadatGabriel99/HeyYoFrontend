import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import HomePage from './HomePage'
import SideMenu from './SideMenu'

const useStyles = makeStyles(theme => ({
    hubMain: {
        paddingLeft: '250px',
        width:' 100%'
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

const UserHub = (props) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <SideMenu {...props}/>
            <div className={classes.hubMain}>
                <Paper className={classes.pageContent}>
                    <HomePage/>
                </Paper>
            </div>
        </React.Fragment>
    )
}

export default UserHub

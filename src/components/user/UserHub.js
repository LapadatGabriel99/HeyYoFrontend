import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import Chat from '../chat/Chat'
import Connect from '../chat/Connect'
import HomePage from './HomePage'
import SideMenu from './SideMenu'

const useStyles = makeStyles(theme => ({
    hubMain: {
        paddingLeft: '250px',
        width: '100%'
    },
}))

const UserHub = (props) => {
    const classes = useStyles()

    const { url, path} = useRouteMatch()

    const fullProps = {url, props}

    return (
        <React.Fragment>
            <SideMenu {...fullProps}/>
            <div className={classes.hubMain}>
                <Switch>
                    <Route exact path={path}>
                        <HomePage/>
                    </Route>
                    <Route exact path={`${path}/public`}>
                        <Connect chatName='Public Chat' url={url}/>
                    </Route>
                    <Route exact path={`${path}/public/chat`}>
                        <Chat/>
                    </Route>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default UserHub

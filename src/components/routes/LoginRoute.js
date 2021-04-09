import React from 'react'
import { Redirect, Route } from 'react-router'

const LoginRoute = ({component: Component, isLoggedIn, ...other}) => (
    <Route {...other} render = {props => {

        if(isLoggedIn) {

            return <Redirect to={{ pathname: '/userhub', state: {from: props.location}}}/>
        }

        return <Component {...props}/>
    }}/>
)
    

export default LoginRoute

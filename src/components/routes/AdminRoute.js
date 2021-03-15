import React from 'react'
import { Route, Redirect } from 'react-router-dom' 

const AdminRoute = ({component: Component, role, isLoggedIn, ...other}) => (
    <Route {...other} render={props => {
        
        if (!isLoggedIn) {

            return <Redirect to={{ pathname: '/', state: {from: props.location}}}/>
        }

        if (role !== 'ROLE_ADMIN') {

            return <Redirect to={{ pathname: '/postLoginMock'}}/>
        }

        return <Component {...props}/>
    }}/>
)



export default AdminRoute

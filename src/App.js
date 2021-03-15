import React from 'react';
import Login from './components/authentication/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/authentication/Register';
import { createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider } from '@material-ui/core';
import NavBar from './components/header/NavBar';
import ResetPassword from './components/authentication/ResetPassword';
import PasswordRecovery from './components/authentication/PasswordRecovery';
import TokenConfirmation from './components/authentication/TokenConfirmation';
import ErrorPage from './components/alert/ErrorPage';
import PostLoginMock from './components/mocks/PostLoginMock';
import RegisterComplaint from './components/user/RegisterComplaint';
import { useSelector } from 'react-redux'
import AdminRoute from './components/routes/AdminRoute';
import PostLoginAdminMock from './components/mocks/PostLoginAdminMock';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  shape: {
    borderRadius: '12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform: 'translateZ(0)'
      }
    }
  }
}) 

const useStyles = makeStyles({
  appMain:{
    width: '100%'
  }
})

function App() {
  const classes = useStyles()

  const isLoggedIn = useSelector(state => state.loginState)
  const authorizationState = useSelector(state => state.authorizationState)
  
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className={classes.appMain}>
          <NavBar/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/resetPassword' component={ResetPassword}/>
          <Route exact path='/passwordRecovery' component={PasswordRecovery}/>
          <Route exact path='/tokenConfirmation' component={TokenConfirmation}/>
          <Route exact path='/errorPage' component={ErrorPage}/>
          <Route exact path='/postLoginMock' component={PostLoginMock}/>
          <Route exact path='/registerComplaint' component={RegisterComplaint}/>
          <AdminRoute exact path='/postLoginAdminMock' 
                      role={authorizationState.role} 
                      isLoggedIn={isLoggedIn}
                      component={PostLoginAdminMock}/>
        </div>
        <CssBaseline/>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;

import React from 'react'
import { AppBar, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import { logout } from '../../actions/userActions';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { ScatterPlotTwoTone } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'static',
    },
    header: {
        textAlign: 'center',
        opacity: '0.9'
    },
    altHeader: {
        textAlign: 'right',
        opacity: '0.6',
    },
    altHeaderEnter: {
        textAlign: 'right',
        opacity: '0.6',
        animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut}`
    },
    altHeaderExit: {
        textAlign: 'right',
        opacity: '1',
        animation: `$fadeOut 1000ms ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes fadeIn": {
        from: {
            opacity: 0.6
        },
        to: {
            opacity: 1
        }
    },
    "@keyframes fadeOut": {
        from: {
            opacity: 1
        },
        to: {
            opacity: 0.6
        }
    },
    loginLink: {
        textDecoration: 'none',
        color: 'inherit',
        opacity: 1,
        animation: `$fadeIn 1000ms ${theme.transitions.easing.easeInOut}`
    },
    loginLinkExit: {
        textDecoration: 'none',
        color: 'inherit',
        opacity: 0.6,
        animation: `$fadeOut 1000ms ${theme.transitions.easing.easeInOut}`
    },
    account: {
        textAlign: 'center',
        color: 'white',
        float: 'right',
        height: '50px',
        width: '50px',
        opacity: '0.9',
        '& MuiSvgIcon-root': {
            fontSize: '30px',
        }
    }
}))

const NavBar = (props) => {
    const classes = useStyles()

    const [hover, setHover] = useState(false)

    const toggleHover = () => {

        setHover(prev => !prev)
    }

    let isLoggedIn = useSelector(state => state.loginState)

    const [anchorElement, setAnchorElement] = useState(null)
    const open = Boolean(anchorElement)

    const dispatch = useDispatch();

    const history = useHistory();

    const handleAccountButtonClick = (event) => {

        setAnchorElement(event.currentTarget)
    }

    const handleCloseMenu = () =>{

        setAnchorElement(null)
    }

    const handleLogout = (history) => {

        dispatch(logout(history))
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Grid container>
                    <Grid item sm={4}>
                        <Typography className={classes.header} 
                                    variant='h4' 
                                    component='div'>Logo</Typography>           
                    </Grid>
                    <Grid item sm={4}>
                        <Typography className={classes.header} 
                                    variant='h4'
                                    component='div'>HeyYO</Typography>
                    </Grid>
                    <Grid item sm={4}>
                    {
                        isLoggedIn
                            ?
                            <React.Fragment>
                                <IconButton 
                                            
                                            className={classes.account}
                                            aria-controls="fade-menu" 
                                            aria-haspopup="true" 
                                            onClick={handleAccountButtonClick}>
                                    <AccountCircleOutlinedIcon fontSize="large"/>
                                </IconButton>
                                <Menu
                                      id="fade-menu"
                                      anchorEl={anchorElement}
                                      keepMounted
                                      open={open}
                                      onClose={handleCloseMenu}
                                      TransitionComponent={Fade}>
                                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                                    <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                                    <MenuItem onClick={() => handleLogout(history)}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                            :
                            <Typography className={classes.altHeader} 
                                variant='h4'
                                component='div'
                                onMouseOver={() => setHover(false)}
                                onMouseLeave={() => setHover(true)}
                                on>
                                <Link to='/' className={clsx(classes.loginLink, {
                                    [classes.loginLinkExit]: hover
                                })}>
                                    Login
                                </Link>
                            </Typography>
                    }
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar

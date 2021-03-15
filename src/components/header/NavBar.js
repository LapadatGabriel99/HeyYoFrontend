import React from 'react'
import { AppBar, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import { logout } from '../../actions/userActions';
import { useHistory } from 'react-router-dom';


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
                                            size='large'
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
                                component='div'>Login
                            </Typography>
                    }
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import { ListItemAvatar } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh'
    },
    chatSectionSelf:{
        minHeight: 72
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    rightMessageArea: {
        marginRight: 0,
    }
}))

const Chat = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.pageContent}>
          <Grid container component={Paper} className={classes.chatSection}>
              <Grid item xs={3} className={classes.borderRight500}>
                  <List className={classes.chatSectionSelf}>
                      
                  </List>
                  <Divider />
                  <List>
                      
                  </List>
              </Grid>
              <Grid item xs={9}>
                  <List className={classes.messageArea}>
                      
                  </List>
                  <Divider />
                  <Grid container style={{padding: '20px'}}>
                      <Grid item xs={11}>
                          <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                      </Grid>
                      <Grid item xs={1} align="right">
                          <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                      </Grid>
                  </Grid>
              </Grid>
          </Grid>
        </div>
    );
}

export default Chat

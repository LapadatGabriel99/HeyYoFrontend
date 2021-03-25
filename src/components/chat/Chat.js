import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { connect, send } from '../../services/stompService'
import Form from '../controls/Form'

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

    const user = useSelector(state => state.userState.data.username)

    const [members, setMembers] = useState([])

    const [message, setMessage] = useState('')

    const [messageList, setMessageList] = useState([{
        type: '',
        content: '',
        sender: '',
        time: ''
    }])

    const [payload, setPayload] = useState({
        type: '',
        content: '',
        sender: '',
        time: ''
    })

    useEffect(() => {
        console.log("Component did mount")
        
        connect(user, onMessageReceived)
    }, [])

    useEffect(() => {

        console.log("Component did update")        
    }, [members, messageList])

    const onInputChanged = (event) => {

        console.log(event.target.value)

        setMessage(event.target.value)
    }

    const onSend = (event) => {

        event.preventDefault()

        send(user, message)

        setMessage('')
    }

    const onMessageReceived = (payload) => {

        const receivedMessage = JSON.parse(payload.body)

        setPayload(receivedMessage)

        if (receivedMessage.type === 'CONNECT') {

            setMembers(members => [...members, receivedMessage.sender])

            setMessageList(messageList => [...messageList, receivedMessage])
        }
        else if (receivedMessage.type === 'DISCONNECT') {

            setMessageList(messageList => [...messageList, receivedMessage])
        }
        else if (receivedMessage.type === 'CHAT') {

            setMessageList(messageList => [...messageList, receivedMessage])
        }
    }

    const chatMembersList = () => {

        if (members) {

            const list = members.map(value => {

                if (value === user) {

                    return <ListItem button key={value}>
                                <ListItemAvatar>
                                    <Avatar alt={value} src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                </ListItemAvatar>
                                <ListItemText primary={`${value} (you)`}></ListItemText>
                            </ListItem>
                }

                return <ListItem button key={value}>
                            <ListItemAvatar>
                                <Avatar alt={value} src="https://material-ui.com/static/images/avatar/1.jpg"/>
                            </ListItemAvatar>
                            <ListItemText primary={value}></ListItemText>
                        </ListItem>
            })
    
            return list
        }

        return <React.Fragment></React.Fragment>
    }

    const chatMessageList = () => {

        if (messageList) {

            const list = messageList.map((value, index) => {

                if (value.type === 'CONNECT') {

                    return  <ListItem key={index}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemAvatar align='center'>
                                            <Avatar alt={value.sender} 
                                                    src="https://material-ui.com/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText align='center' 
                                                        primary={value.content}>
                                        </ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align='center'
                                                        secondary='9:30'>
                                        </ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                }

                if (value.type === 'DISCONNECT') {

                    return  <ListItem key={index}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemAvatar align='center'>
                                            <Avatar alt={value.sender}
                                                    src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                        </ListItemAvatar>
                                        <ListItemText align='center'
                                                        primary={value.content}>
                                        </ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align='center'
                                                        secondary='9:30'>
                                        </ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                }

                if (value.type === 'CHAT') {

                    if (value.sender === user) {

                        return  <ListItem key={index}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemAvatar align='right'>
                                                <Avatar alt={value.sender}
                                                    src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                            </ListItemAvatar>
                                            <ListItemText align='right'
                                                            primary={value.content}>
                                            </ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText align='right'
                                                            secondary='9:30'>
                                            </ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                    }
                    else {

                        return  <ListItem key={index}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemAvatar align='left'>
                                                <Avatar alt={value.sender}
                                                    src="https://material-ui.com/static/images/avatar/1.jpg"/>
                                            </ListItemAvatar>
                                            <ListItemText align='left'
                                                            primary={value.content}>
                                            </ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText align='left'
                                                            secondary='9:30'>
                                            </ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                    }
                }
            })

            return list
            
        }

        return <React.Fragment></React.Fragment>
    }

    return (
        <div className={classes.pageContent}>
          <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List className={classes.chatSectionSelf}>
                    <ListItem button key={user}>
                    <ListItemAvatar>
                        <Avatar alt={user} src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={`${user} |a.k.a| yourself`}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {chatMembersList()}
                </List>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    {chatMessageList()}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" 
                                        label="Type Something" 
                                        fullWidth
                                        autoComplete="off"
                                        value={message}
                                        onChange={onInputChanged}/>
                    </Grid>
                    <Grid item xs={1} align="right">
                        <Fab    color="primary" 
                                aria-label="add"
                                onClick={onSend}>
                            <SendIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </div>
    );
}

export default Chat

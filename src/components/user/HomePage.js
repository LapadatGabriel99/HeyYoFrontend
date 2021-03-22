import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    title: {
      fontWeight: 'italic',
      color: theme.palette.primary.light  
    },
    body: {
      padding: '10px',
      color: theme.palette.primary.main
    },
    secondColumn: {
        marginTop: '72px'
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        height: '85vh'
    }
}))

const HomePage = (props) => {
    const classes = useStyles()

    return (
        <Paper className={classes.pageContent}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant='h2' className={classes.title}>
                        Welcome to HeyYo
                    </Typography>
                    <Typography variant='body1' className={classes.body}>
                    What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.secondColumn}>
                    <Typography variant='body1' className={classes.body}>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HomePage

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Main.css';
import ImgCard from './ImgCard';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Main = ({ nohave, menuArr }) => {


    console.log(menuArr.menuArr[0].img);
    /*
    import test from '../assets/images/spring-boot-logo.png'
    console.log(test);
    /static/media/spring-boot-logo.8315cb30.png
    <img src={test}/>
    */
    const classes = useStyles();

    return (
        <div className={classes.root} className="allBackgroundColor">

            {/* <button onClick={nohave}>nohave</button> */}

            <Grid container spacing={3} className="shell">

                <Grid item xs={2}>
                    Web DEV
                    {/* <Paper className={classes.paper}>Web DEV</Paper> */}
                </Grid>
                <Grid item xs={4}>
                    {/* <Paper className={classes.paper}>공백</Paper> */}
                </Grid>
                <Grid item xs={2}>
                    About
                    {/* <Paper className={classes.Paper}>About</Paper> */}
                </Grid>
                <Grid item xs={2}>
                    Login
                    {/* <Paper className={classes.paper}>Login</Paper> */}
                </Grid>
                <Grid item xs={2}>
                    Sing up
                    {/* <Paper className={classes.paper}>Sign up</Paper> */}
                </Grid>

                <Grid container spacing={1} className="menu">
                    <Grid item xs={4}>
                        <ImgCard className="card1BackgoundColor" menu={menuArr.menuArr[0]} />
                    </Grid>

                    <Grid item xs={4}>
                        <ImgCard className="card2BackgoundColor" menu={menuArr.menuArr[1]} />
                    </Grid>

                    <Grid item xs={4}>
                        <ImgCard className="card3BackgoundColor" menu={menuArr.menuArr[2]} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Main;
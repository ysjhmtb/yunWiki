import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
  },
  title: {
      marginRight: theme.spacing(2),
  },
  menu: {
      marginLeft: theme.spacing(2)
  }

}));

export default function MainHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            YunWiki
          </Typography>
          <Typography  className={classes.menu}>About</Typography>
          <Typography className={classes.menu}>Login</Typography>
          <Typography className={classes.menu}>Sign Up</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

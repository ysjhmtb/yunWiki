import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { width } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    float: 'left'
  },
  media: {
    minHeight: 240,
  },
});

export default function MainCard(props) {
    console.log('MainCard');
    console.log(props); 

    const classes = useStyles();

  return (
    <Card className={classes.card} color={props.colorCardImg}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color={props.colorCardText} component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

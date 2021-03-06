import React from 'react';
import { Route, Link } from 'react-router-dom';
import MainCard from './MainCard';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    cardDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10%'
    },
    card: {
        maxWidth: 350,
        padding: 10,
        display: 'flex',
        width: '33%',
        float: 'left'
    }
  });

export default function MainBody(props) {
    console.log('MainBody');
    console.log(props);

    const classes = useStyles();

    return (
        <div className={classes.cardDiv}>
            <div className={classes.card}>
            <Link to="/wikiview/SpringBoot">
                <MainCard colorCardImg="#e25153"
                    title={props.menuArr[0].title}
                    imgSrc={props.menuArr[0].img}
                    colorCardText="#bc2c2d"
                    text={props.menuArr[0].content} />
            </Link>
            </div>

            <div className={classes.card}>
            <Link to="/wikiview/React">
                <MainCard colorCardImg="#64b9cc"
                    title={props.menuArr[1].title}
                    imgSrc={props.menuArr[1].img}
                    colorCardText="#398392"
                    text={props.menuArr[1].content} />
            </Link>
            </div>
            
            <div className={classes.card}>
            <Link to="/wikiview/Network">
                <MainCard colorCardImg="#72bd87"
                    title={props.menuArr[2].title}
                    imgSrc={props.menuArr[2].img}
                    colorCardText="#478056"
                    text={props.menuArr[2].content} />
            </Link>
            </div>
        </div>
    );
};

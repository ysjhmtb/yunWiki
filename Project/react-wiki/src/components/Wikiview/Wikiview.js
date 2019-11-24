import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Contentview from './Contentview';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import imghome from '../../assets/images/home.svg';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    mainContainer:{
        width: '100%',
        height: '100%'
    },
    DivLeft:{
        width:'30%',
        float: 'left',
        margin: '1rem'
    },
    DivTitles:{

    },
    DivRight:{
        paddingLeft: '1rem',
        width: '60%',
        float: 'left',
        margin: '1rem'
    },
    home:{
        margin: '10px',
        color: 'black'
    },
    category:{
        marginTop: '20px',
        marginBottom: '20px'
    }
  });

const Wikiview = (props) => {

    const classes = useStyles();

    console.log('Wikiview');
    console.log(props);      

    const [objToRender, setObjToRender] = useState("");

    function renderContent(index) {
        setObjToRender(props.ObjArr[index]);
    }
    const titlesList = props.ObjArr.map((obj, index) => {
        return (
            <ListItem button>
                <ListItemText
                    key={index}
                    onClick={() => renderContent(index)}>
                    {obj.title} {index}
                </ListItemText>
            </ListItem>
        )
    }); 


    return (
        <div className={classes.mainContainer}>
            <div className={classes.DivLeft}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <img src={imghome} style={{ width: 15 }}/>
                    <Typography variant="h8" className={classes.home}>Home</Typography>
                </Link>

                <Typography variant="h5" className={classes.category}>
                    {props.category}
                </Typography>

                <Typography variant="h6" className={classes.DivTitles}>
                <Divider />
                <div>
                    {titlesList}
                </div>
                </Typography>
            </div>

            <div className={classes.DivRight}>
                <Contentview contentObj={objToRender} category={props.category} />
            </div>
        </div>
    );
};

export default Wikiview;
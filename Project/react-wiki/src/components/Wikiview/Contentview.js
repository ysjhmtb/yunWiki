import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';
import './Contentview.css';
import { UserConsumer } from '../../contexts/userContext';
import { Test } from '../../contexts/Test';


const Contentview = (props) => {

    const url = "/editor/" + props.category;

    return (
        <div>
            <div className="catagoryDiv">{props.category}</div>
            {/* <div className="writingDiv"><Link to="/editor"> 작성하기 </Link></div> */}
            <div className="writingDiv"><Link to={url}> 작성하기 </Link></div>

            <hr />
            <MarkdownRenderer markdown={props.content} />

        </div>
    );
};

export default Contentview;
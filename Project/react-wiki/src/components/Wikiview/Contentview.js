import React from 'react';
import { Route, Link } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';
import './Contentview.css';

const Contentview = (props)=>{
    return (
        <div> 
            <div className="catagoryDiv">{props.category}</div> 
            <div className="writingDiv"><Link to="/"> 작성하기 </Link></div>

            <hr/>
            <MarkdownRenderer markdown={props.content} />
        </div>
    );
};

export default Contentview;
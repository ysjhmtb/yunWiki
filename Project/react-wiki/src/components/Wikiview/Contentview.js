import React, { useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';
import './Contentview.css';
import { UserConsumer } from '../../contexts/userContext';
import {Test} from '../../contexts/Test';


const Contentview = (props) => {

    return (
        <div>
            <div className="catagoryDiv">{props.category}</div>
            <div className="writingDiv"><Link to="/"> 작성하기 </Link></div>

            <hr />
            <MarkdownRenderer markdown={props.content} />

            {/* <Test/> */}
        

        </div>
    );
};

export default Contentview;
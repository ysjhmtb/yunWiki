import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import './Wikiview.css';
import Contentview from './Contentview';

const DivWikiview = styled.div`
    padding:3rem;
    width:100%;
    margin:1rem;    
`;

const DivLeft = styled.div`
    width:30%;
    float:left;
    margin:1rem;
`;

const DivTitles = styled.div`
    // width:100%;
`;

const DivEachTitle = styled.div`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const DivRight = styled.div`
    padding-left:1rem;
    width:60%;
    float:left;
    margin:1rem;
`;




const Wikiview = (props) => {
    console.log(props.titles[0]);
    console.log(props.category);

    const [contentToRender, setContentToRender] = useState("");

    function renderContent(index){
        console.log('clicked');
        console.log(index);
        setContentToRender(props.contents[index]);
     }

    const titlesList = props.titles.map((title, index) => {
        // return <DivEachTitle key={index}>{title}</DivEachTitle>;
        return <div className="eachTitle"
            key={index}
            onClick = {() =>renderContent(index)}>
            {title} {index}
        </div>
    });
    const contentsList = props.contents.map((content, index) => {
        return <li key={index}>{content}</li>;
    });


    return (
        <DivWikiview>

            <DivLeft>
                <Link to="/"><div style={{ margin: "1rem" }}>Home</div></Link>
                <div style={{ margin: "1rem" }}>{props.category}</div>

                <DivTitles>
                    {titlesList}
                </DivTitles>
            </DivLeft>

            <DivRight>
                <Contentview content={contentToRender} category={props.category}/>
            </DivRight>
        </DivWikiview>
    );
};

export default Wikiview;
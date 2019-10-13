import React from 'react';
import styled, { css } from 'styled-components';
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";

const DivWikiview = styled.div`
    padding:3rem;
    width:100%;    
`;

const DivLeft = styled.div`
    width:30%;
    float:left;
`;

const DivTitles = styled.div`
    width:100%;
`;

const DivEachTitle = styled.div`
    // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const DivRight = styled.div`
    padding-left:3rem;
    width:60%;
    float:left;
`;


const Wikiview = (props) => {
    console.log(props.titles[0]);
    console.log(props.category);

    const titlesList = props.titles.map((title, index) => {
        return <DivEachTitle key={index}>{title}</DivEachTitle>;
    });
    const contentsList = props.contents.map((content, index) => {
        return <li key={index}>{content}</li>;
    });

    return (
        <DivWikiview>

            <DivLeft>
                <div>Home</div>
                <div>{props.category}</div>
                <DivTitles>
                    {titlesList}
                </DivTitles>
            </DivLeft>

            <DivRight>
                Right
            </DivRight>
        </DivWikiview>
    );
};

export default Wikiview;
import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import MainCard from './MainCard';



const DivMainBody = styled.div`
    background:#e7e3e5;
    padding:10rem;
    display:inline-block;
    text-align:center;
    vertical-align: middle;
`;


const MainBody = (props) => {

    console.log(props.menuArr[0]);

    return (
        <DivMainBody>

            <Link to="/wikiview/springboot">
                <MainCard colorCardImg="#e25153"
                    imgSrc={props.menuArr[0].img}
                    colorCardText="#bc2c2d"
                    text={props.menuArr[0].content} />
            </Link>

            <Link to="/wikiview/react">
                <MainCard colorCardImg="#64b9cc"
                    imgSrc={props.menuArr[1].img}
                    colorCardText="#398392"
                    text={props.menuArr[1].content} />
            </Link>

            <Link to="/wikiview/network">
                <MainCard colorCardImg="#72bd87"
                    imgSrc={props.menuArr[2].img}
                    colorCardText="#478056"
                    text={props.menuArr[2].content} />
            </Link>

        </DivMainBody>
    );
};

export default MainBody;
import React from 'react';
import styled, { css } from 'styled-components';

const CardShell = styled.div`
    display: inline-block;
    height: 400px;
    margin: 7rem;
    position: relative;
    width: 400px;
    
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`;

const ImgDivInCard = styled.div`
    background:${props => props.color};
    height:50%;
    text-align:center;
    vertical-align: middle;
`;


const ImgOfCard = styled.img`
    padding:2rem;
    max-width: 50%;
    height: auto;
`;

const TextDivInCard = styled.div`
    padding:3rem;
    background:${props => props.color};
    height: 50%;
    text-align: center;
    vertical-align: middle;
`;

const MainCard = (props) => {    

    return (
        <CardShell>
            <ImgDivInCard color={props.colorCardImg}>
                <ImgOfCard src={props.imgSrc} alt="cardimg" />
            </ImgDivInCard>
            <TextDivInCard color={props.colorCardText}>{props.text}</TextDivInCard>
        </CardShell>
    );
};

export default MainCard;
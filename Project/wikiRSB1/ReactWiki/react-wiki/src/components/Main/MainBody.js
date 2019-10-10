import React from 'react';
import styled, { css } from 'styled-components';
import MainCard from './MainCard';


const DivMainBody = styled.div`
    background:#e7e3e5;
    padding:10rem;
    displey:inline-block;
    text-align:center;
    vertical-align: middle;
`;


const MainBody = (menuArr) => {

    return (
        <DivMainBody>
            <MainCard colorCardImg="#e25153" imgSrc={menuArr.menuArr.menuArr[0].img} colorCardText="#bc2c2d" text={menuArr.menuArr.menuArr[0].content}/>
            <MainCard colorCardImg="#64b9cc" imgSrc={menuArr.menuArr.menuArr[1].img} colorCardText="#398392" text={menuArr.menuArr.menuArr[1].content}/>
            <MainCard colorCardImg="#72bd87" imgSrc={menuArr.menuArr.menuArr[2].img} colorCardText="#478056" text={menuArr.menuArr.menuArr[2].content}/>
        </DivMainBody>
    );
};

export default MainBody;
import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background:#e7e3e5;
    padding:2rem;
    // display:inline-block;
    text-align:center;
    vertical-align: middle;
`;

const DivInBox = styled.div`
    background:#e7e3e5;
    color:black;
    padding:2rem;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    font-size: 2rem;
    font-weight: 600;
    ${props =>
        props.rightPadding &&
        css`
            padding-right:40rem;        
        `
    };
`;




const MainHeader = () => (
    <Box>
        <DivInBox rightPadding={true}>Wiki Dev</DivInBox>
        <DivInBox>About</DivInBox>
        <DivInBox>Login</DivInBox>
        <DivInBox>Sign up</DivInBox>
    </Box>
);

export default MainHeader;
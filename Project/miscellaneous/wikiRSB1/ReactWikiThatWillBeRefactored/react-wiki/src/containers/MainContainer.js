import React from 'react';
import { connect } from 'react-redux';
import { nohave } from '../modules/main';
import MainHeader from '../components/Main/MainHeader';
import MainBody from '../components/Main/MainBody';
import styled, { css } from 'styled-components';


const DivMainContainer = styled.div`
    text-align:center;
    vertical-align: middle;
`;


const MainContainer = ({ nohave, menuArr }) => {

    return (
        <DivMainContainer>
            <MainHeader />
            <MainBody menuArr={menuArr} />
        </DivMainContainer>
    );
};

export default connect(
    state => ({
        menuArr: state.main
    }),
    {
        nohave
    }
)(MainContainer);
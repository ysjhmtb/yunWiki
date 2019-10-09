import React from 'react';
import { connect } from 'react-redux';
import { nohave } from '../modules/main';
import Main from '../components/Main';


const MainContainer = ({ nohave, menuArr }) => {

    return (
        <Main nohave={nohave} menuArr={menuArr} />
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
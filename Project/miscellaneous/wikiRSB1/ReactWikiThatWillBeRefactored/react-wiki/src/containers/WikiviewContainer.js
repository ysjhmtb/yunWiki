import React from 'react';
import { connect } from 'react-redux';
import { wikiviewaction } from '../modules/wikiview';
import styled, { css } from 'styled-components';

const DivWikiviewContainer = styled.div`
    text-align:center;
    vertical-align: middle;
    display:inline-block;
`;
// , wikiviewaction, titleArr, contentsArr  
const WikiviewContainer = ({ match, wikiviewaction, titleArr, contentsArr }) => {

    console.log("match");
    console.log(match.params);  // subject: "springboot"

    return (
        <DivWikiviewContainer>
            Hello
        </DivWikiviewContainer>
    );
};

export default connect(
    state => ({
        titleArr: state.titleArr,
        contentsArr: state.contentsArr
    }),
    {
        wikiviewaction
    }
);

// export default WikiviewContainer;
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Wikiview from '../components/Wikiview/Wikiview';

const DivWikiviewContainer = styled.div`
    // text-align:center;
    // vertical-align: middle;
    // display:inline-block;
`;

const WikiviewContainer = ({ match }) => {
    
    const [wikiTitlesArr, setWikiTitlesArr] = useState(
        {
            springTitles: ['Spring Boot first', 'Spring Boot second'],
            reactTitles: ['React first', 'React second'],
            networkTitles: ['Network first', 'Network second']
        }
    );

    const [wikiContentsArr, setWikiContentsArr] = useState(
        {
            springContents: ['# Spring Boot first\n ## H2.', '# Spring Boot second\n ## H2.'],
            reactContents: ['# React first\n ## H2.', '# React second\n ## H2.'],
            networkContents: ['# Network first\n ## H2.', '# Network second\n ## H2.']
        }
    );

    const { subject } = match.params;

    if (!subject) {
        return <div>존재하는 않는 페이지!</div>;
    }

    if (subject == 'springboot') {
        return (
            <DivWikiviewContainer>
                <Wikiview 
                    category='SpringBoot'
                    titles={wikiTitlesArr.springTitles}
                    contents={wikiContentsArr.springContents} />
            </DivWikiviewContainer>
        );

    } else if (subject == 'react') {
        return (
            <DivWikiviewContainer>
                <Wikiview 
                    category="React"
                    titles={wikiTitlesArr.reactTitles}
                    contents={wikiContentsArr.reactContents} />
            </DivWikiviewContainer>
        );
    } else if (subject == 'network') {
        return (
            <DivWikiviewContainer>
                <Wikiview
                    category="Network"
                    titles={wikiTitlesArr.networkTitles}
                    contents={wikiContentsArr.networkContents} />
            </DivWikiviewContainer>
        );
    }
};

export default WikiviewContainer;


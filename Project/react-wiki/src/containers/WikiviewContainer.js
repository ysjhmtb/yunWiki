import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Wikiview from '../components/Wikiview/Wikiview';
import axios from 'axios'

const DivWikiviewContainer = styled.div`
    // text-align:center;
    // vertical-align: middle;
    // display:inline-block;
`;

const WikiviewContainer = ({ match }) => {

    console.log(match);
    /*
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
    */
    const [wikiConArrObj, setWikiConArrObj] = useState({
        springTitles:[],
        springContents:[],
        reactTitles:[],
        reactContents:[],
        networkTitles:[],
        networkContents:[]
    });


    const [loading, setLoading] = useState(false);





    useEffect(() => {
        /*
        [{...}]
        0:
        contents: "# 주제1 ↵ 컨텐츠"
        createdDatetime: "2019.10.26 08:50:36"
        title: "스프링 제목 하나"
        wikiIndex: 1
        */
        let tempSpringTitles = [];
        let tempSpringContents = [];
        let tempReactTitles = [];
        let tempReactContents = [];
        let tempNetworkTitles = [];
        let tempNetworkContents = [];

        const getTitlesAndContents = async () => {
            setLoading(true);
            try {
                // 스프링 게시물에 대한 데이터 읽어오기
                let response = await axios.get(
                    'http://localhost:8080/api/wikispring',
                );

                response.data.forEach(element => {
                    tempSpringTitles.push(element.title);
                    tempSpringContents.push(element.contents);
                });


                // 리액트 게시물에 대한 데이터 읽어오기
                response = await axios.get(
                    'http://localhost:8080/api/wikireact',
                );

                response.data.forEach(element => {
                    tempReactTitles.push(element.title);
                    tempReactContents.push(element.contents);
                });


                // 네트웍 게시물에 대한 데이터 읽어오기
                response = await axios.get(
                    'http://localhost:8080/api/wikinetwork',
                );

                response.data.forEach(element => {
                    tempNetworkTitles.push(element.title);
                    tempNetworkContents.push(element.contents);
                });
                const tempObj = {
                    springTitles:tempSpringTitles,
                    springContents:tempSpringContents,
                    reactTitles:tempReactTitles,
                    reactContents:tempReactContents,
                    networkTitles:tempNetworkTitles,
                    networkContents:tempNetworkContents
                }
                setWikiConArrObj(tempObj);               

                setLoading(false);


            } catch (e) {
                console.log(e);
            }
        };
        getTitlesAndContents();
    }, []);




    const { category } = match.params;

    if (!category) {
        return <div>존재하는 않는 페이지!</div>;
    }

    if (loading) {
        return <div>대기 중...</div>
    }

    if (loading === false && category === 'SpringBoot') {
        return (
            <DivWikiviewContainer>

                {/* <Wikiview
                    category='SpringBoot'
                    titles={wikiTitlesArr.springTitles}
                    contents={wikiContentsArr.springContents} /> */}
                    <Wikiview
                    category='SpringBoot'
                    titles={wikiConArrObj.springTitles}
                    contents={wikiConArrObj.springContents} />
            </DivWikiviewContainer>
        );

    } else if (loading === false && category === 'React') {
        return (
            <DivWikiviewContainer>

                <Wikiview
                    category="React"
                    titles={wikiConArrObj.reactTitles}
                    contents={wikiConArrObj.reactContents} />
            </DivWikiviewContainer>
        );
    } else if (loading === false && category === 'Network') {
        return (
            <DivWikiviewContainer>

                <Wikiview
                    category="Network"
                    titles={wikiConArrObj.networkTitles}
                    contents={wikiConArrObj.networkContents} />
            </DivWikiviewContainer>
        );
    } else {
        return (
            <div>hmm</div>
        );
    }

};

export default WikiviewContainer;


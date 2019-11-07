import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Wikiview from '../components/Wikiview/Wikiview';
import axios from 'axios'

const DivWikiviewContainer = styled.div`
    // text-align:center;
    // vertical-align: middle;
    // display:inline-block;
`;

const WikiviewContainer = ({ match, props }) => {
    

    const [wikiConArrObj, setWikiConArrObj] = useState({

        springObjArr: [],
        reactObjArr: [],
        networkObjArr: []
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        let TspringObjs = [];
        let TreactObjs = [];
        let TnetworkObjs = [];

        const getTitlesAndContents = async () => {
            setLoading(true);
            try {
                // 스프링 게시물에 대한 데이터 읽어오기
                let response = await axios.get(
                    'http://localhost:8080/api/wikispring',
                );
                console.log('받아온 데이터 출력');
                console.log(response.data);

                response.data.forEach(element => {
                    console.log('forEach element print');
                    console.log(element);
                    /*
                    {wikiIndex: 7, title: "llvm", contents: "hmm", createdDatetime: "2019.10.30 08:24:21"}
                    */
                    TspringObjs.push(element);
                });


                // 리액트 게시물에 대한 데이터 읽어오기
                response = await axios.get(
                    'http://localhost:8080/api/wikireact',
                );

                response.data.forEach(element => {
                    TreactObjs.push(element);
                });


                // 네트웍 게시물에 대한 데이터 읽어오기
                response = await axios.get(
                    'http://localhost:8080/api/wikinetwork',
                );

                response.data.forEach(element => {
                    TnetworkObjs.push(element);
                });
                const tempObj = {
                    springObjArr: TspringObjs,
                    reactObjArr: TreactObjs,
                    networkObjArr: TnetworkObjs

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

                <Wikiview
                    category='SpringBoot'
                    ObjArr={wikiConArrObj.springObjArr}
                />
            </DivWikiviewContainer>
        );

    } else if (loading === false && category === 'React') {
        return (
            <DivWikiviewContainer>

                <Wikiview
                    category='React'
                    ObjArr={wikiConArrObj.reactObjArr}
                />
            </DivWikiviewContainer>
        );
    } else if (loading === false && category === 'Network') {
        return (
            <DivWikiviewContainer>

                <Wikiview
                    category='Network'
                    ObjArr={wikiConArrObj.networkObjArr}
                />
            </DivWikiviewContainer>
        );
    } else {
        return (
            <div>hmm</div>
        );
    }

};

export default WikiviewContainer;


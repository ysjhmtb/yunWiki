import React, { useState, useEffect } from 'react';
import Wikiview from '../components/Wikiview/Wikiview';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container:{
        height: 1
    }
  });

const WikiviewContainer = ({ match, props }) => {
    console.log('WikiviewContainer: match');
    console.log(match);
    console.log('WikiviewContainer: props');
    console.log(props);

    const classes = useStyles();
    

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
                    // 'http://localhost:8080/api/wikispring',
                    'http://3.135.76.114:80/api/wikispring',
                );
                console.log('받아온 데이터 출력');
                console.log(response.data);

                response.data.forEach(element => {
                    console.log('forEach element print');
                    console.log(element);
                    TspringObjs.push(element);
                });


                // 리액트 게시물에 대한 데이터 읽어오기
                response = await axios.get(
                    // 'http://localhost:8080/api/wikireact',
                    'http://3.135.76.114:80/api/wikireact',
                );

                response.data.forEach(element => {
                    TreactObjs.push(element);
                });


                // 네트웍 게시물에 대한 데이터 읽어오기
                response = await axios.get(
                    // 'http://localhost:8080/api/wikinetwork',
                    'http://3.135.76.114:80/api/wikinetwork',
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
            <div className={classes.container}>
                <Wikiview
                    category='SpringBoot'
                    ObjArr={wikiConArrObj.springObjArr}
                />
            </div>
        );

    } else if (loading === false && category === 'React') {
        return (
            <div className={classes.container}>
                <Wikiview
                    category='React'
                    ObjArr={wikiConArrObj.reactObjArr}
                />
            </div>
        );
    } else if (loading === false && category === 'Network') {
        return (
            <div className={classes.container}>
                <Wikiview
                    category='Network'
                    ObjArr={wikiConArrObj.networkObjArr}
                />
            </div>
        );
    } else {
        return (
            <div>hmm</div>
        );
    }

};

export default WikiviewContainer;


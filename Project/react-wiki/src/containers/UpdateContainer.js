import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"
import MarkdownRenderer from 'react-markdown-renderer'
import axios from 'axios'
import './UpdateContainer.css'

const UpdateContainer = (props) => {
    console.log('UpdateContainer');
    console.log(props);

    // editor
    const [rawtitle, setRawtitle] = useState(props.location.state.contentObj.title);
    const [rawmarkdown, setRawmarkdown] = useState(props.location.state.contentObj.contents);
    const [loading, setLoading] = useState(true);
    const [logInfoFromServer, setLogInfo] = useState(false);

    // writing state 
    const [writingCompleted, setWritingCompleted] = useState(false);

    const handleTitle = e => {
        console.log(e.target.value);
        setRawtitle(e.target.value);
    }

    const handleChange = value => {
        console.log(value);
        setRawmarkdown(value);
    };

    

    const renderRedirect = () => {
        if (logInfoFromServer === false) {
            return <Redirect to={{
                pathname: '/signin/' + props.category,
                state: props.location.state
            }} />
        } else if (writingCompleted === true) {
            return <Redirect to={'/wikiview/' + props.category} />
        }

        // if (props.signstate.signstate === false) {
        //     return <Redirect to={{
        //         pathname: '/signin/' + props.category,
        //         state: props.location.state
        //     }} />
        // } else if (writingCompleted === true) {
        //     return <Redirect to={'/wikiview/' + props.category} />
        // }
    }

    // writing completed 
    const completeWriting = () => {

        try {

            const tempCategory = props.category;
            // const tempUrl = 'http://localhost:8080/api/update/' + tempCategory;
            const tempUrl = 'http://3.135.76.114:80/api/update/' + tempCategory;
            axios.put(tempUrl, {
                title: rawtitle,
                contents: rawmarkdown,
                wikiIndex: props.location.state.contentObj.wikiIndex
            });

        } catch (e) {
            console.log(e);
        }

        setWritingCompleted(true);
        renderRedirect();
    }

    // getting login info
    const checkLoginStatus = () => {
        let response = axios.get('http://3.135.76.114:80/api/getLoginStatus');
        response.then(function (value) {
            console.log(value.data.LoginStatus);
            if (value.data.LoginStatus === true) {
                setLogInfo(true);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
    }

    checkLoginStatus();
    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!loading) {
        return (
            <div className='updateDiv'>
                {renderRedirect()}

                <div className='updateTitle'>
                    TITLE
                    <input className='updateInput' value={rawtitle} type="text" onChange={handleTitle} /></div>
                <SimpleMDE value={rawmarkdown} onChange={handleChange} />
                <MarkdownRenderer markdown={rawmarkdown} />

                <hr />

                <button onClick={() => completeWriting()}>complete</button>
            </div>
        )
    }
}

UpdateContainer.propTypes = {
    signstate: PropTypes.object,
    signchange: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    signstate: state.sign,
    category: props.match.params.category
})

const mapDispatchToProps = dispatch => ({
    signchange: () => dispatch(signchange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContainer)

// export default UpdateContainer;
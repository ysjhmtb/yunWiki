import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"
import MarkdownRenderer from 'react-markdown-renderer'
import axios from 'axios'

const UpdateContainer = (props) => {

    // editor
    const [rawtitle, setRawtitle] = useState(props.location.state.props.contentObj.title);
    const [rawmarkdown, setRawmarkdown] = useState(props.location.state.props.contentObj.contents);

    const handleTitle = e => {
        console.log(e.target.value);
        setRawtitle(e.target.value);
    }

    const handleChange = value => {
        console.log(value);
        setRawmarkdown(value);
    };

    // writing state 
    const [writingCompleted, setWritingCompleted] = useState(false);

    const renderRedirect = () => {
        if (props.signstate.signstate === false) {
            // return <Redirect to={'/signin/' + props.category} />
            return <Redirect to={{
                pathname: '/signin/' + props.category,
                state: props.location.state
            }} />
        } else if (writingCompleted === true) {
            return <Redirect to={'/wikiview/' + props.category} />
        }
    }

    // writing completed 
    const completeWriting = () => {

        try {

            const tempCategory = props.category;
            const tempUrl = 'http://localhost:8080/api/update/' + tempCategory;
            axios.put(tempUrl, {
                title: rawtitle,
                contents: rawmarkdown,
                wikiIndex: props.location.state.props.contentObj.wikiIndex
            });

        } catch (e) {
            console.log(e);
        }

        setWritingCompleted(true);
        renderRedirect();
    }




    return (
        <div>
            {renderRedirect()}

            <div>Title: <input value={rawtitle} type="text" onChange={handleTitle} /></div>
            <SimpleMDE value={rawmarkdown} onChange={handleChange} />
            <MarkdownRenderer markdown={rawmarkdown} />

            <hr />

            <button onClick={() => completeWriting()}>complete</button>
        </div>
    )
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
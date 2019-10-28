import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"
import MarkdownRenderer from 'react-markdown-renderer'

// temp

  
// temp

const EditorContainer = (props) => {
    console.log('EditorContainer');
    console.log(props);


    // editor
    const [rawmarkdown, setRawmarkdown] = useState('');

    const handleChange = value => {
        console.log(value);
        setRawmarkdown(value);
    };

    // writing state 
    const [writingCompleted, setWritingCompleted] = useState(false);

    const renderRedirect = () => {
        if (props.signstate.signstate == false) {
            return <Redirect to={'/signin/' + props.category} />
        } else if (writingCompleted === true) {
            return <Redirect to={'/wikiview/' + props.category} />
        }


    }


    // writing completed 
    const completeWriting = () => {
        console.log('completeWriting');
        console.log('/wikiview/' + props.category);
        setWritingCompleted(true);
        renderRedirect();
    }




    return (
        <div>
            {/* sign state: {props.signstate.signstate.toString()} */}
            {/* <button onClick={props.signchange}>change sign state</button> */}
            {renderRedirect()}

            <SimpleMDE onChange={handleChange} />
            <MarkdownRenderer markdown={rawmarkdown} />




            <hr />

            <button onClick={() => completeWriting()}>complete</button>

        </div>
    )
}

EditorContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)


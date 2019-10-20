import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"
import MarkdownRenderer from 'react-markdown-renderer'


const EditorContainer = (props) => {
    console.log('EditorContainer');
    console.log(props);
    const renderRedirect = () => {
        if (props.signstate.signstate == false) {
            return <Redirect to='/signin' />
        }
    }

    // editor
    const [rawmarkdown, setRawmarkdown] = useState('');

    const handleChange = value => {
        console.log(value);
        setRawmarkdown(value);
    };

    // writing completed uncompleted

    const completeWriting = () => {
        console.log('completeWriting');
        let url = '/'+'counter';
        console.log(url);
        return <Redirect to='/wikiview/springboot' />
    }




    return (
        <div>
            {/* sign state: {props.signstate.signstate.toString()} */}
            {/* <button onClick={props.signchange}>change sign state</button> */}
            {renderRedirect()}

            <SimpleMDE onChange={handleChange} />
            <MarkdownRenderer markdown={rawmarkdown} />

            <hr />

            <button onClick={completeWriting}>complete</button>

        </div>
    )
}

EditorContainer.propTypes = {
    signstate: PropTypes.object,
    signchange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    signstate: state.sign,
})

const mapDispatchToProps = dispatch => ({
    signchange: () => dispatch(signchange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)
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

    console.log('UpdateContainer:');
    console.log(props);
    console.log(props.match.params.category);

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

   

    return (
        <div>
            {renderRedirect()}
            UpdateContainer
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
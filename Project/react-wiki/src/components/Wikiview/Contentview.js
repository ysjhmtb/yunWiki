import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import MarkdownRenderer from 'react-markdown-renderer'
import './Contentview.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../../actions/sign'
import { write, update } from '../../actions/writingType'
import { UserConsumer } from '../../contexts/userContext'
import axios from 'axios'



const Contentview = (props) => {

    const updateUrl = "/update/" + props.category;
    const url = "/editor/" + props.category;

    return (
        <div>
            <div className="catagoryDiv">{props.category}</div>
            <div className="writingDiv"><Link to={{
                pathname: url,
                state: { props, editortype: "write" }
            }}> 작성하기 </Link></div>
            <div className="updateDiv"><Link to={{
                pathname: updateUrl,
                state: { props, editortype: "update" }
            }} > 수정하기 </Link></div>

            <hr />
            <MarkdownRenderer markdown={props.contentObj.contents} />

        </div>
    );
};

// Contentview.propTypes = {
//     signstate: PropTypes.object,
//     signchange: PropTypes.func.isRequired,
// }

// const mapStateToProps = (state, props) => ({
//     signstate: state.sign,
//     category: props.category
// })

// const mapDispatchToProps = dispatch => ({
//     signchange: () => dispatch(signchange()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Contentview)

export default Contentview;


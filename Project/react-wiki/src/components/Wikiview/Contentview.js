import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import MarkdownRenderer from 'react-markdown-renderer'
import './Contentview.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../../actions/sign'
import axios from 'axios'
import Button from '@material-ui/core/Button';


const Contentview = (props) => {
    console.log('Contentview');
    console.log(props);

    const updateUrl = "/update/" + props.category;
    const url = "/editor/" + props.category;

    const [deleteFlag, setDeleteFlag] = useState(false);
    const deleteWiki = () => {
        if (props.signstate.signstate == false) {
            setDeleteFlag(true);
            renderRedirect();
        } else if (props.signstate.signstate == true && props.contentObj != "") {
            try {
                const tempCategory = props.category;
                const tempUrl = 'http://3.135.76.114:80/api/delete/' + tempCategory;
                axios.put(tempUrl, {
                    wikiIndex: props.contentObj.wikiIndex
                });
                window.location.reload();

            } catch (e) {
                console.log(e);
            }
        }
    }

    const renderRedirect = () => {
        if (deleteFlag == true) {
            return <Redirect to={{
                pathname: '/signin/' + props.category,
                state: { category: props.category, contentObj: props.contentObj, editortype: "delete" }
            }} />
        }
    }

    return (
        <div>
            <div className="catagoryDiv">{props.category}</div>
            <div calssName='menuDiv'>
            <Button className="writingDiv">
                <Link
                    style={{textDecoration: 'none', color: 'black'}}
                    to={{
                        pathname: url,
                        state: { category: props.category, contentObj: props.contentObj, editortype: "write" }
                }}> 
                    작성하기 
                </Link>
            </Button>

            <Button className="updatebtnDiv">
                <Link
                    style={{textDecoration: 'none', color: 'black'}}
                    to={{
                        pathname: updateUrl,
                        state: { category: props.category, contentObj:      props.contentObj, editortype: "update" }
                }} > 
                    수정하기 
                </Link>
            </Button>

            <Button className="deleteDiv" onClick={deleteWiki}>
                삭제하기
            </Button>
            </div>
            <hr className="divider"/>
            <MarkdownRenderer markdown={props.contentObj.contents} />
            {renderRedirect()}
        </div>

    );
};


Contentview.propTypes = {
    signstate: PropTypes.object,
    signchange: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    signstate: state.sign,
    category: props.category
})

const mapDispatchToProps = dispatch => ({
    signchange: () => dispatch(signchange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Contentview)



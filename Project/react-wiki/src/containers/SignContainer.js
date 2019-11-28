import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import GoogleLogin from 'react-google-login'
import './SignContainer.css'
import axios from 'axios'

const SignContainer = (props) => {
    console.log('SignContainer');
    console.log(props);

    const sendLoginInfo = async (email_addr) => {
        console.log("sendLoginInfo");
        console.log(email_addr);
        try {
            const url = 'http://3.135.76.114:80/api/setLogin'
            await axios.post(url, {
                email: email_addr
            });

        } catch (e) {
            console.log(e);
        }
    }

    const responseGoogle = (response) => {
        if (response.profileObj.email === 'yunseokjeonapi@gmail.com') {
            sendLoginInfo(response.profileObj.email);
            props.signchange();
        }
    }

    const renderRedirect = () => {
        // && props.location.state.editortype !== 'update'
        if (props.signstate.signstate == true && props.location.state.editortype === 'write') {
            // return <Redirect to={'/editor/' + props.category} />
            return <Redirect to={{
                pathname: '/editor/' + props.category,
                state: props.location.state
            }} />
        } else if (props.signstate.signstate == true && props.location.state.editortype === 'update') {
            // return <Redirect to={'/update/' + props.location.state.props.category} />
            return <Redirect to={{
                pathname: '/update/' + props.category,
                state: props.location.state
            }} />
        } else if (props.signstate.signstate == true && props.location.state.editortype === 'delete') {
            return <Redirect to={{
                pathname: '/wikiview/' + props.category,
                state: props.location.state
            }} />
        }
    }

    return (
        <div>
            <div className='wrap'>
                Login
            <GoogleLogin
                    className='login'
                    clientId="1014864534722-ml110psa3e6loulpvpfpulpoch986efu.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>

            {renderRedirect()}
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    signstate: state.sign,
    category: props.match.params.category
})

const mapDispatchToProps = dispatch => ({
    signchange: () => dispatch(signchange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer)
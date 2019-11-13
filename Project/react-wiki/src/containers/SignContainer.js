import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import GoogleLogin from 'react-google-login'


const SignContainer = (props) => {
    console.log('SignContainer');
    console.log(props);

    const responseGoogle = (response) => {

        if (response.profileObj.email === 'ysjhmtb@gmail.com') {
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
        }
    }

    return (
        <div>
            <GoogleLogin
                clientId="1014864534722-ml110psa3e6loulpvpfpulpoch986efu.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />

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
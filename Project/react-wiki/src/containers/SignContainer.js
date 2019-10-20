import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signchange } from '../actions/sign'
import GoogleLogin from 'react-google-login';


const SignContainer = (props) => {
    console.log('SignContainer');

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.email);

        if (response.profileObj.email === 'ysjhmtb@gmail.com') {
            props.signchange();
        }
    }

    const renderRedirect = () => {
        if (props.signstate.signstate == true) {
            return <Redirect to='/editor' />
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

const mapStateToProps = state => ({
    signstate: state.sign,
})

const mapDispatchToProps = dispatch => ({
    signchange: () => dispatch(signchange()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer)
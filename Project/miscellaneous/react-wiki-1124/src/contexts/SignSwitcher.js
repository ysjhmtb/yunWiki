import React, { Component } from "react";

import SignContext from "./userContext";



class SignSwitcher extends Component {

    render() {
        return (
            <SignContext.Consumer>
                {({ isSigned, setSign }) => (

                    <button onClick={() => {
                        if (isSigned === 'true') {
                            setSign("false");
                        } else {
                            setSign("true");
                        }

                    }}>
                        Sign status (Current: {isSigned})
                    </button>
                )}
            </SignContext.Consumer>
        );
    }
}

export default SignSwitcher;

import React, { Component } from "react";
import ReactDOM from "react-dom";

import SignContext from "./userContext";
import SignSwitcher from "./SignSwitcher";

export class Test extends Component {
    setSign = isSigned => {
      this.setState({ isSigned });
    };
  
    state = {
      isSigned: "true",
      setSign: this.setSign
    };
  
    render() {
      return (
        <SignContext.Provider value={this.state}>
          <h2>Current Language: {this.state.isSigned}</h2>
          <p>Click button to change to true</p>
          <div>
            {/* Can be nested */}
            <SignSwitcher />
          </div>
        </SignContext.Provider>
      );
    }
  }

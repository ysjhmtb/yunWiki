import React from "react";

// https://codesandbox.io/s/x7xrmnr954 
// set the defaults
const SignContext = React.createContext({
  isSigned: "false",
  setSign: () => {}
});

export default SignContext;

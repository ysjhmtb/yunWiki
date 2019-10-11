import React from 'react';
import { Router, BrowserRouter, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import WikiviewContainer from './containers/WikiviewContainer';

function App() {
  return (
    <div>
      
      <Route path="/" component={MainContainer} exact={true} />
      <Route path="/wikiview/:subject" component={WikiviewContainer} />


    </div>
  );
}

export default App;

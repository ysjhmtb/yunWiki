import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer';
import WikiviewContainer from './containers/WikiviewContainer';
import { Router, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={MainContainer} exact={true} />
      <Route path="/wikiview/:subject" component={WikiviewContainer} />
    </div>
  );
}

export default App;

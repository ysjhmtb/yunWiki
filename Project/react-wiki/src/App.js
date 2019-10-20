import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer';
import WikiviewContainer from './containers/WikiviewContainer';
import EditorContainer from './containers/EditorContainer';
import Counter from './components/Counter'
import { Router, BrowserRouter, Route } from 'react-router-dom';
import SignContainer from './containers/SignContainer';

function App() {
  return (
    <div>
      <Route path="/" component={MainContainer} exact={true} />
      <Route path="/counter" component={Counter} />
      <Route path="/wikiview/:subject" component={WikiviewContainer} />
      <Route path="/editor" component={EditorContainer} />
      <Route path="/signin" component={SignContainer} />

    </div>
  );
}

export default App;

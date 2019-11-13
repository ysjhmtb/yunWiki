import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer';
import WikiviewContainer from './containers/WikiviewContainer';
import EditorContainer from './containers/EditorContainer';
import Counter from './components/Counter'
import { Router, BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import SignContainer from './containers/SignContainer';
import UpdateContainer from './containers/UpdateContainer';

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/" component={MainContainer} exact={true} />
          <Route path="/counter" component={Counter} />
          <Route path="/wikiview/:category" component={WikiviewContainer} />
          <Route path="/editor/:category" component={EditorContainer} />
          <Route path="/signin/:category" component={SignContainer} />
          <Route path="/update/:category" component={UpdateContainer} />
        </Switch>
      </div>
    </ConnectedRouter>
    
  );
}

export default App;
// export default withRouter(connect(mapStateToProps,)(App));

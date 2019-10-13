import React from 'react';
import { render } from 'react-dom';

// Router
// import { Router, Route, browserHistory, Redirect } from 'react-router';
import { Router, Route, Redirect } from 'react-router';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
import { createLogger } from 'redux-logger';


const logger = createLogger();
// store
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

// history
// const history = syncHistoryWithStore(browserHistory, store)

// ReactDOM.render((
//     <Provider store={store}>
//         <Router history={history}>
//             {/* <Redirect from="/" to="home" /> */}
//                 <Route path="/" component={App}>
//                 <Route path="/" component={MainContainer} exact={true} />
//                 <Route path="/wikiview/:subject" component={WikiviewContainer} />
//             </Route>
//         </Router>
//     </Provider>
// ), document.getElementById('wrapper'))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

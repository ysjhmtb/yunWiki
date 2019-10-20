import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import configureStore, { history } from './configureStore'

const store = configureStore()

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Provider store={store}>
                    <App history={history} />
                </Provider>
            </BrowserRouter>
        </AppContainer>
        , document.getElementById('root')
    );
}


render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

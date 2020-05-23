import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom'

const history = createBrowserHistory();
const store = configureStore({}, history)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);
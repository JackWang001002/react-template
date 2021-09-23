import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from './reducer/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />,
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
);

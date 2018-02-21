import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App/App';
import initStore from './redux/store';

ReactDOM.render(
  <Provider store={initStore()}><App /></Provider>,
  document.getElementById('root'),
);


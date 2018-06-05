import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import configureStore from './helpers/configureStore';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
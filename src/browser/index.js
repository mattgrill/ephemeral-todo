import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { extendObservable } from 'mobx';

import App from './components/app';

import defaultState from '../store';

render(
  <Provider
    store={extendObservable(defaultState, window.__INITIAL_STATE__)}
  >
    <App />
  </Provider>, document.getElementById('root'));

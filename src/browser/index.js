import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/app';

import AppState from '../store';

render(<Provider store={AppState}><App /></Provider>, document.getElementById('root'));

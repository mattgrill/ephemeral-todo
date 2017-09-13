import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'mobx-react';

import App from '../browser/components/app';
import template from './template';

import AppState from '../store';

const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send(template({
    body: renderToString(<Provider store={new AppState()}><App /></Provider>),
    title: 'Hello World from the server',
  }));
});

server.listen(process.env.PORT || 8888);

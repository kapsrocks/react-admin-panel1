import React from 'react';
import { object, oneOfType, array } from 'prop-types';
import { fromJS } from 'immutable';
import createHistory from 'history/createBrowserHistory';
import configureStore from './../app/redux/store';

import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import {} from './normalize.scss';
import {} from './../app/styles/layout/_base.scss';
import getRoutes from './../app/routes';

const initialState = fromJS(window.__INITIAL_STATE__);
const history = createHistory();
const store = configureStore(history, initialState);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(getRoutes(store))}
    </ConnectedRouter>
  </Provider>
);

export default Root;

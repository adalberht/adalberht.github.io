import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import './tailwind.css';
import configureStore from './redux/configureStore';
import App from './containers/';
import theme from './constants/theme';
import './style';
import registerServiceWorker from './registerServiceWorker';

const { persistor, store, history } = configureStore();

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('app')
);
registerServiceWorker();

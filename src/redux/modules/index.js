import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import utils from './utils';

export default {
  router: routerReducer,
  utils,
};

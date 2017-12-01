import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import utils from './utils';
import skills from './skills';

export default {
  router: routerReducer,
  utils,
  skills,
};

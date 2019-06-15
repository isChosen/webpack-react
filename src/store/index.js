/*
 * @Author: Chosen
 * @Date: 2019-06-12 21:12:05
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-12 23:42:20
 * @Decription: Global state
 */

import { createStore, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import initReducer from './reducer';

// 开发环境时，启用 Redux 调试插件，生产环境将其移除
// eslint-disable-next-line import/no-mutable-exports
let store;

if (process.env.NODE_ENV !== 'pro') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(combineReducers(initReducer), composeEnhancers());
} else {
  store = createStore(combineReducers(initReducer));
}

store.asyncReducer = { ...initReducer };

// 动态注入 reducer
export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducer, key)) return;
  store.asyncReducer[key] = reducer;
  store.replaceReducer(combineReducers({ ...store.asyncReducer }));
};


export default store;

/*
 * @Author: Chosen
 * @Date: 2019-05-28 22:07:40
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-12 21:15:21
 * @Decription: 顶级容器
 */

import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import store from '@store';

const App = lazy(() => import(/* webpackChunkName: "chunk-app" */ '@component/app/App'));
const Login = lazy(() => import(/* webpackChunkName: "chunk-login" */ '@component/login/Login'));
const AuthorRoute = lazy(() => import(/* webpackChunkName: "chunk-author" */ '@common/AuthorRoute'));

render(
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={<div>玩命加载中...</div>}>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <AuthorRoute path="/app" component={App} />
          <Route path="/login" render={props => <Login {...props} />} /> {/* 不需要判断权限 */}
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

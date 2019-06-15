/*
 * @Author: Chosen
 * @Date: 2019-06-11 22:58:33
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-15 15:17:17
 * @Decription:
 */

import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import less from './app.less';

const Home = lazy(() => import(/* webpackChunkName: "chunk-home" */ '@component/home/Home'));
const About = lazy(() => import(/* webpackChunkName: "chunk-about" */ '@component/about/About'));
const Header = lazy(() => import(/* webpackChunkName: "chunk-header" */ '@common/header/Header'));
const Sidebar = lazy(() => import(/* webpackChunkName: "chunk-sidebar" */ '@common/sidebar/Sidebar'));
const Product = lazy(() => import(/* webpackChunkName: "chunk-product" */ '@component/product/Product'));
const ResponseInterc = lazy(() => import(/* webpackChunkName: "chunk-responseInterc" */ '@common/response/ResponseInterc'));


// console.log('less: ', less);
const App = props => {
  const { match: { path } } = props;
  return (
    <div className={less.container}>
      <Header />
      <section className={`${less.body} clearfix`}>
        <div className={less.sidebar}>
          <Sidebar />
        </div>
        <div className={less.main}>
          <Suspense fallback={<div>玩命加载中...</div>}>
            <Switch>
              <Redirect exact from={`${path}`} to={`${path}/home`} />
              <Route path={`${path}/home`} render={props => <Home {...props} />} />
              <Route path={`${path}/product`} render={props => <Product {...props} />} />
              <Route path={`${path}/about`} render={props => <About {...props} />} />
              <Redirect to={`${path}/home`} />
            </Switch>
          </Suspense>
        </div>
      </section>
      <ResponseInterc />
      <footer className={less.footer}>Footer</footer>
    </div>
  );
};

export default withRouter(App);

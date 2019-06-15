/*
 * @Author: Chosen
 * @Date: 2019-06-11 22:33:04
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-15 17:54:34
 * @Decription: Author route
 */

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { certified } from '@util/request';

class AuthorRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      logged: false
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ pending: false, logged: true }), 500);
    /* certified()
      .then(result => {
        // console.log('certified result: ', result);
        const { code, data, msg, data: { status } } = result;
        // console.log('authorRoute status: ', status);
        if (code === 0) {
          if (data) {
            if (status) {
              this.setState({ pending: false, logged: true });
            } else {
              this.setState({ pending: false, logged: false });
            }
          } else {
            console.log('data: ', '获取不到数据，请稍后重试');
          }
        } else {
          console.log('certified failed: ', msg);
        }
      })
      .catch(error => {
        console.log('certified error: ', error);
      }); */
  }

  render() {
    const { pending, logged } = this.state;
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (pending) return <div>Loading...</div>;
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  }
}

export default AuthorRoute;

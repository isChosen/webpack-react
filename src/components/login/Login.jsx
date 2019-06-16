/*
 * @Author: Chosen
 * @Date: 2019-06-11 20:16:30
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-16 13:36:49
 * @Decription: Login Component
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RESET_RELOGIN_FLAG2_FALSE } from '@store/actionTypes';
import { fn1 } from './methods';
// import { submit } from '@util/request';
import less from './login.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      access: false // 进入系统
    };

    this.handleUser = this.handleUser.bind(this);
    this.handlePwd = this.handlePwd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fn1('测试 fn');
    const { resetReLoginFlag } = this.props;
    resetReLoginFlag({ type: RESET_RELOGIN_FLAG2_FALSE, bool: false });
  }

  handleUser(ev) {
    const userName = ev.target.value.trim();
    if (userName) {
      this.setState({ userName });
    } else {
      this.setState({ userName: null });
    }
  }

  handlePwd(ev) {
    const password = ev.target.value.trim();
    if (password) {
      this.setState({ password });
    } else {
      this.setState({ password: null });
    }
  }

  handleSubmit() {
    const { userName, password } = this.state;
    if (userName === null || password === null) {
      alert('用户名或密码不能为空');
      return;
    }
    setTimeout(() => this.setState({ access: true }), 1000);

    /* submit({ userName, password })
      .then(result => {
        console.log('submit result: ', result);
        const { code, data, msg, data: { number } } = result;
        if (code === 0) {
          if (data) {
            if (number === 1) {
              this.setState({ access: true });
            } else {
              this.setState({ access: false });
            }
          } else {
            console.log('data: ', '获取不到数据，请稍后重试');
          }
        } else {
          console.log('login failed: ', msg);
        }
      })
      .catch(error => {
        console.log('submit error: ', error);
      }); */
  }

  render() {
    const { access } = this.state;
    return (
      <div className={less.container}>
        { access && <Redirect to="/app" /> }
        <h3>Login component</h3>
        <div className={less.form}>
          用户名： <input type="text" onChange={this.handleUser} />
          <br />
          <br />
          密  码： <input type="password" onChange={this.handlePwd} />
          <br />
          <br />
          <button type="button" onClick={this.handleSubmit}>
            提交
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  resetReLoginFlag(argv) {
    dispatch(argv);
  }
});

export default connect(null, mapDispatch)(Login);
